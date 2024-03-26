import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from "typeorm";

import { User } from "@pck/papuga-types";

@Entity({ name: "user" })
class UserEntity implements User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  createdTimestamp: Date;

  @Column()
  enabled: boolean;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default UserEntity;
