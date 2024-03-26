import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import { Item } from "@pck/papuga-types";

@Entity({ name: "item" })
export class ItemEntity implements Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  value?: number;

  @Column({ nullable: true })
  serialNumber?: string;

  @Column({ nullable: true })
  productionDate?: Date;

  @Column({ nullable: true })
  expirationDate?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
