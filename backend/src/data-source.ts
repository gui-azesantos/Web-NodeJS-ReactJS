import "reflect-metadata";
import { DataSource } from "typeorm";
import { Tasks } from "./entity/Tasks";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "tarefas-backend-tarefas-backend.g.aivencloud.com",
  port: 19742,
  username: "avnadmin",
  password: "AVNS_AmVQQHP_2ZSJbjDmUl_",
  database: "defaultdb",
  synchronize: true,
  logging: false,
  entities: [User, Tasks],
  migrations: [],
  subscribers: [],
  ssl: {
    rejectUnauthorized: false,
  },
});
