import { Timestamp } from "./Utils";

export interface Vehicle extends Timestamp {
  id: number;
  plate: string;
  vin: string;
  make: string;
  model: string;
  year: number;
  deletedAt: Date;
  value?: number;
}
