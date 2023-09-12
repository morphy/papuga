import "dotenv/config";

import Provider, { Configuration } from "oidc-provider";
import express from "express";
import helmet from "helmet";

import { getEnv, logInfo } from "@pck/utils";

const configuration: Configuration = {
  clients: [
    {
      client_id: "foo",
      client_secret: "bar",
      redirect_uris: ["https://example.com"]
    }
  ]
};

const cspDirectives = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDirectives["form-action"];

const PORT = getEnv("PORT");
const ISSUER = getEnv("ISSUER");

const app = express();

const oidcProvider = new Provider(ISSUER, configuration);

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: cspDirectives
    }
  })
);

app.use(oidcProvider.callback());

app.listen(PORT, async () => {
  logInfo(`Listening on ${PORT}`);
});
