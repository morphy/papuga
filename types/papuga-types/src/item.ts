export interface Item {
  id: number;
  name: string;
  code: string;
  image: string;
}

export interface CreateItem extends Partial<Omit<Item, "id">> {}

export interface UpdateItem extends Partial<Omit<Item, "id">> {}
