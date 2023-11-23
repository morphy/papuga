import express from "express";
import cors from "cors";

import { logInfo } from "@pck/utils";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.hostname, req.subdomains);
  res.json({ co: "gówno" });
});

app.listen(4000, () => {
  logInfo("Server listening on port 3000");
});
