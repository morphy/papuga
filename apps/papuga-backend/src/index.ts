import express from "express";
import cors from "cors";
import helmet from "helmet";

import { logError, logInfo, logSuccess } from "@pck/utils";

import { RegisterRoutes } from "./tsoa/routes";
import { AppDataSource } from "./data-source";

import errorHandler from "./errorHandler";
import notFoundHandler from "./notFoundHandler";

logInfo("Papuga backend server started");
logInfo("Initializing datasource");

AppDataSource.initialize()
  .then(() => {
    logInfo("Initializing express");

    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    logInfo("Registering controllers");

    RegisterRoutes(app);

    app.use(notFoundHandler);
    app.use(errorHandler);

    app.listen(4000, () => {
      logSuccess("Server listening on port 4000");
    });
  })
  .catch((error) => {
    logError("Error during datasource initialization", error);
  });
