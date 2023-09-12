import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import { getEnv } from "@pck/utils";

import * as schema from "./schema.js";

const postgresClient = postgres(getEnv("POSTGRES"));

const db = drizzle(postgresClient, { schema });

export default db;
