import { Timestamp } from "./Utils";

export interface Item extends Timestamp {
  id: number;
  code: string;
  deletedAt: Date;
  name?: string;
  value?: number;
  serialNumber?: string;
  productionDate?: Date;
  expirationDate?: Date;
}
