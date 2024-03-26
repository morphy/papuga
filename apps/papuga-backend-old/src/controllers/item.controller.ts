import { Not, IsNull } from "typeorm";
import {
  Body,
  Controller,
  Delete,
  Get,
  Middlewares,
  Patch,
  Path,
  Post,
  Put,
  Query,
  Res,
  Route,
  SuccessResponse,
  Tags,
  TsoaResponse
} from "tsoa";

import {
  Item,
  CreateItem,
  UpdateItem,
  CodeAvailability
} from "@pck/papuga-types";

import ItemRepository from "repositories/item.repository";
import authMiddleware from "misc/authMiddleware";

@Route("items")
@Tags("Item")
export class ItemController extends Controller {
  /* Create */

  @SuccessResponse(201, "Created")
  @Post("")
  @Middlewares(authMiddleware(["admin"]))
  public async createItem(
    @Body() data: CreateItem,
    @Res()
    duplicateCodeResponse: TsoaResponse<422, { code: 422; details: string }>
  ): Promise<Item> {
    this.setStatus(201);

    const foundItem = await ItemRepository.findOne({
      where: { code: data.code },
      withDeleted: true
    });

    if (foundItem) {
      return duplicateCodeResponse(422, {
        code: 422,
        details: `Item with code ${data.code} already exists`
      });
    }

    const item = ItemRepository.create(data);

    return await ItemRepository.save(item);
  }

  /* Read */

  @Get("")
  @Middlewares(authMiddleware(["user", "admin"]))
  public async getItems(
    @Query() withDeleted: boolean | "only" = false
  ): Promise<Item[]> {
    if (withDeleted === "only") {
      return await ItemRepository.find({
        where: { deletedAt: Not(IsNull()) },
        withDeleted: true
      });
    }

    return await ItemRepository.find({ withDeleted: Boolean(withDeleted) });
  }

  @Get("codeAvailability")
  @Middlewares(authMiddleware(["user", "admin"]))
  public async getCodeAvailability(
    @Query() code: string
  ): Promise<CodeAvailability> {
    const foundItem = await ItemRepository.findOne({
      where: { code },
      withDeleted: true
    });

    return {
      available: !foundItem
    };
  }

  @Get("{id}")
  @Middlewares(authMiddleware(["user", "admin"]))
  public async getItem(
    @Path() id: number,
    @Res() notFoundResponse: TsoaResponse<422, { code: 422; details: string }>
  ): Promise<Item> {
    const item = await ItemRepository.findOne({
      where: { id },
      withDeleted: true
    });

    if (!item) {
      return notFoundResponse(422, {
        code: 422,
        details: `Item with id ${id} could not be found`
      });
    }

    return item;
  }

  /* Update */

  @Patch("{id}")
  @Middlewares(authMiddleware(["admin"]))
  public async updateItem(
    @Path() id: number,
    @Body() data: UpdateItem,
    @Res() notFoundResponse: TsoaResponse<422, { code: 422; details: string }>
  ) {
    const item = await ItemRepository.findOne({ where: { id } });

    if (!item) {
      return notFoundResponse(422, {
        code: 422,
        details: `Item with id ${id} could not be found`
      });
    }

    Object.assign(item, data);

    return await ItemRepository.save(item);
  }

  /* Delete */

  @Delete("{id}")
  @Middlewares(authMiddleware(["admin"]))
  public async deleteItem(
    @Path() id: number,
    @Query() hard: boolean = false,
    @Res() notFoundResponse: TsoaResponse<422, { code: 422; details: string }>
  ): Promise<void> {
    const result = hard
      ? await ItemRepository.delete(id)
      : await ItemRepository.softDelete(id);

    if (result.affected === 0) {
      return notFoundResponse(422, {
        code: 422,
        details: `Item with id ${id} could not be found`
      });
    }

    return;
  }

  /* Restore */

  @Put("{id}")
  @Middlewares(authMiddleware(["admin"]))
  public async restoreItem(
    @Path() id: number,
    @Res() notFoundResponse: TsoaResponse<422, { code: 422; details: string }>
  ): Promise<void> {
    const result = await ItemRepository.restore(id);

    if (result.affected === 0) {
      return notFoundResponse(422, {
        code: 422,
        details: `Item with id ${id} could not be found`
      });
    }

    return;
  }
}
