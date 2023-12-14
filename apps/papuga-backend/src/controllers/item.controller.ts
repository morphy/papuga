import { Controller, Delete, Get, Middlewares, Path, Route } from "tsoa";

import { Item } from "@pck/papuga-types";

import ItemRepository from "repositories/item.repository";
import authMiddleware from "misc/authMiddleware";

@Route("items")
export class ItemController extends Controller {
  @Get()
  @Middlewares(authMiddleware(["user", "admin"]))
  public async getItems(): Promise<Item[]> {
    return await ItemRepository.find();
  }

  @Get("{id}")
  @Middlewares(authMiddleware(["admin"]))
  public async getItem(@Path() id: number): Promise<Item | null> {
    return await ItemRepository.findOne({ where: { id } });
  }

  @Delete("{id}")
  @Middlewares(authMiddleware(["admin"]))
  public async deleteItem(@Path() id: number) {
    return await ItemRepository.softDelete(id);
  }
}
