import { Timestamp } from "./Utils";

export type RentalStatus = "rented" | "returned";

export interface Rental extends Timestamp {
  id: number;
  userId: string;
  itemId: string;
  date: Date;
  status: RentalStatus;
}
