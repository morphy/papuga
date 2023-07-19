import { Entity, model, property } from "@loopback/repository";

@model()
export class Item extends Entity {
  @property({
    type: "string"
  })
  name?: string;

  @property({
    type: "number",
    id: true,
    generated: true
  })
  id?: number;

  constructor(data?: Partial<Item>) {
    super(data);
  }
}

export interface ItemRelations {
  // describe navigational properties here
}

export type ItemWithRelations = Item & ItemRelations;
