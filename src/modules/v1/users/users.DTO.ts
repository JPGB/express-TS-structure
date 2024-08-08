interface IUserGetAllRequest {
  name: string;
  age: number;
  password: string;
}

interface IUserGetAllResponse {
  name: string;
  age: number;
}

export { IUserGetAllRequest, IUserGetAllResponse };
