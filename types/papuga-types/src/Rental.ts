import { Timestamp } from "./Utils";

export interface Rental extends Timestamp {
  id: number;
  userId: string;
  itemId: string;
  date: Date;
}
