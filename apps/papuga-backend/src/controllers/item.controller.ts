import { Controller, Get, Path, Query, Route } from "tsoa";

import { Item } from "@pck/papuga-types";

@Route("items")
export class ItemController extends Controller {
  @Get("{id}")
  public async getItem(
    @Path() id: number,
    @Query() name?: string
  ): Promise<Item> {
    const item = {
      id: id,
      name: name || "abc",
      code: "123",
      image: "12333123",
      d: "dd"
    };

    return item;
  }
}
