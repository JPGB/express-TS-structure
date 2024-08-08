import { Express } from "express";
import UserRouter from "./modules/v1/users/users.routes";

export const MainRouter = (server: Express) => {
  server.use(UserRouter);
  server.get("/api/delayRoute/:delay", (request, response) => {
    const delay = parseInt(request.params.delay);

    setTimeout(() => {
      // console.warn(request.params.delay);
      // console.warn(delay);
      response.send({ requestDelay: request.params.delay, delay });
    }, delay);
  });
};
