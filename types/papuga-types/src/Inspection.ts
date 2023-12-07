import { Timestamp } from "./Utils";

export type InspectionType = "incidental" | "periodic";
export type InspectionStatus = "scheduled" | "done";
export type InspectionResult = "pass" | "fail";

interface Inspection extends Timestamp {
  id: number;
  userId: string;
  name: string;
  date: Date;
  type: InspectionType;
  status: InspectionStatus;
  result: InspectionResult;
  description?: string;
}

export interface ItemInspection extends Inspection {
  itemId: number;
}

export interface VehicleInspection extends Inspection {
  vehicleId: number;
}
