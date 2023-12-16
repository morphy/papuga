import { SoftDelete, Timestamp } from "./Utils";

export interface Item extends Timestamp, SoftDelete {
  id: number;
  code: string;
  name?: string;
  value?: number;
  serialNumber?: string;
  productionDate?: Date;
  expirationDate?: Date;
}

export interface CreateItem {
  code: string;
  name?: string;
  value?: number;
  serialNumber?: string;
  productionDate?: Date;
  expirationDate?: Date;
}

export interface UpdateItem {
  code?: string;
  name?: string;
  value?: number;
  serialNumber?: string;
  productionDate?: Date;
  expirationDate?: Date;
}

export interface CodeAvailability {
  available: boolean;
}

/* Tsoa doesn't work with these :c */

// export interface CreateItem
//   extends PartialOmitRequire<Item, "id" | keyof Timestamp, "code"> {}
//
// export interface UpdateItem extends PartialOmit<Item, "id" | keyof Timestamp> {}
