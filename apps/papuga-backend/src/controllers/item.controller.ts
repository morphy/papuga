import { Controller, Delete, Get, Path, Route } from "tsoa";

import { Item } from "@pck/papuga-types";

import ItemRepository from "repositories/item.repository";

@Route("items")
export class ItemController extends Controller {
  @Get()
  public async getItems(): Promise<Item[]> {
    return await ItemRepository.find();
  }

  @Get("{id}")
  public async getItem(@Path() id: number): Promise<Item | null> {
    return await ItemRepository.findOne({ where: { id } });
  }

  @Delete("{id}")
  public async deleteItem(@Path() id: number) {
    return await ItemRepository.softDelete(id);
  }
}
