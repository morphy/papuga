import "reflect-metadata";
import { DataSource } from "typeorm";
import { join } from "path";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "papuga",
  synchronize: true,
  logging: false,
  entities: [join(__dirname, "entities/*.entity.{js,ts}")],
  migrations: [join(__dirname, "migrations/*.ts")],
  subscribers: []
});
