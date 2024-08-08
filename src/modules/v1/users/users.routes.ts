import { Router } from "express";
import { UserController } from "./users.controller";

const UserRouter = Router();

UserRouter.route("/api/v1/users").get(new UserController().getAll).post();

UserRouter.route("/api/v1/users/:id").get().patch().delete();

export default UserRouter;
