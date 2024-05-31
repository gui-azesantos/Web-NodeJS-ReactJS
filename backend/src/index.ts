import * as bodyParser from "body-parser";
import * as express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import routes from "./routes";

const app = express();

AppDataSource.initialize().then(async () => {
  app.use(bodyParser.json());
  app.use(routes);

  app.listen(3333);
});
