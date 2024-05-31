import { Request, Response, Router } from "express";

import {
  deleteTask,
  finishedTask,
  getTask,
  getTasks,
  saveTask,
  updateTask,
} from "./controller/TaskController";

const routes = Router();

routes.get("/home", (request: Request, response: Response) => {
  return response.json({ message: "Hello!" });
});

routes.get("/tasks", getTasks);
routes.post("/tasks", saveTask);
routes.get("/tasks/:id", getTask);
routes.put("/tasks/:id", updateTask);
routes.delete("/tasks/:id", deleteTask);
routes.patch("/tasks/:id", finishedTask);

export default routes;
