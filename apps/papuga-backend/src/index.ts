import express from "express";
import cors from "cors";
import helmet from "helmet";

import { logInfo } from "@pck/utils";

import { RegisterRoutes } from "./tsoa/routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

RegisterRoutes(app);

app.listen(4000, () => {
  logInfo("Server listening on port 4000");
});
