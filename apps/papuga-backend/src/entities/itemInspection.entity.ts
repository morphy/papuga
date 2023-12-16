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
  ItemInspection
} from "@pck/papuga-types";

@Entity({ name: "itemInspection" })
export class ItemInspectionEntity implements ItemInspection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemId: number;

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

  @Column()
  description?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
