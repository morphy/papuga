import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { createClient } from "redis";
import { decodeJwt } from "jose";
import { generateHTML, serve } from "swagger-ui-express";

import { logError, logInfo, logSuccess } from "@pck/utils";

import { RegisterRoutes } from "./tsoa/routes";
import { AppDataSource } from "./data-source";

import errorHandler from "misc/errorHandler";
import notFoundHandler from "misc/notFoundHandler";
import authHandler from "misc/authHandler";

import corsConfig from "misc/corsConfig";
import scheduleCronTasks from "./cron/scheduleCronTasks";

const start = async () => {
  logInfo("Papuga backend server started");

  logInfo("Initializing datasource");
  await AppDataSource.initialize();

  logInfo("Initializing redis client");
  const redisClient = createClient();

  logInfo("Connecting to redis instance");
  await redisClient.connect();

  logInfo("Scheduling cron tasks");

  scheduleCronTasks();

  logInfo("Initializing express");
  const app = express();

  app.use(cors(corsConfig));
  app.use(helmet());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(authHandler(redisClient));

  app.get("/", async (req, res) => {
    const idToken = req.oidc.idToken;
    const accessToken = req.oidc.accessToken?.access_token;

    res.json({
      acc_exp: req.oidc.accessToken?.isExpired(),
      is_authorized: req.oidc.isAuthenticated(),
      id_token: idToken ? decodeJwt(idToken) : "",
      access_token: accessToken ? decodeJwt(accessToken) : ""
    });
  });

  app.use(
    "/docs",
    serve,
    async (req: express.Request, res: express.Response) => {
      return res.send(generateHTML(await import("./tsoa/swagger.json")));
    }
  );

  logInfo("Registering controllers");

  RegisterRoutes(app);

  logInfo("Registering error handlers");

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(4000, () => {
    logSuccess("Server listening on port 4000");
  });
};

start().catch((error) => logError("Error during server startup", error));
