import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import {
  InspectionResult,
  InspectionStatus,
  InspectionType,
  VehicleInspection
} from "@pck/papuga-types";

@Entity({ name: "vehicleInspection" })
export class VehicleInspectionEntity implements VehicleInspection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleId: number;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  type: InspectionType;

  @Column()
  status: InspectionStatus;

  @Column()
  result: InspectionResult;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
