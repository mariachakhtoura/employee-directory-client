import { IUserData } from "../../common/models/user";

export interface ILoaderData {
  users: IUserData[];
  user: IUserData;
  categories: string[];
}