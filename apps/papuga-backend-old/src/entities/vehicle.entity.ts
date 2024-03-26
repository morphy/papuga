import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import { Vehicle } from "@pck/papuga-types";

@Entity({ name: "vehicle" })
export class VehicleEntity implements Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  plate: string;

  @Column({ nullable: true })
  value?: number;

  @Column()
  vin: string;

  @Column()
  year: number;

  @DeleteDateColumn()
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
