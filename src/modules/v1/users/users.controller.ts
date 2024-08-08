import { Request, Response } from "express";
import { IUserGetAllRequest, IUserGetAllResponse } from "./users.DTO";
import { TypedRequest, TypedResponse } from "../../../main.types";

export class UserController {
  constructor() {
    console.warn("construido");
  }

  getAll(
    request: TypedRequest<{}, IUserGetAllRequest>,
    response: TypedResponse<IUserGetAllResponse>
  ): TypedResponse<IUserGetAllResponse> {
    return response.status(200).json({ age: 1, name: "test" });
  }
}
