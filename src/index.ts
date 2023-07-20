import express from "express";
import { config } from "dotenv";
import { initializeClient } from "./database/config";
import { router } from "./routes";
import path from "path"
config();

initializeClient();

const app = express();
app.use(express.static(path.resolve(__dirname, "uploads")))
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3333, () =>
  console.log("Server listening on port", process.env.PORT || 3333)
);
