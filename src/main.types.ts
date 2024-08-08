import { Send, Query, Response, Request } from "express-serve-static-core";

interface TypedRequest<IQuery extends Query, IBody> extends Request {
  body: IBody;
  query: IQuery;
}

interface TypedResponse<ResBody> extends Response {
  status: (code: number) => this;
  json: (data: ResBody) => this;
}

export { TypedRequest, TypedResponse };
