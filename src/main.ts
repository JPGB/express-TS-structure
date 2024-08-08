import express from "express";
import { MainRouter } from "./main.routes";

const server = express();

MainRouter(server);

server.listen(4000, () => {
  console.warn("Server started!");
});
