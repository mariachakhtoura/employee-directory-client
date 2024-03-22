import { IUserData } from "../../common/models/user";

export interface ICategoryValue {
  code: string;
  name: string;
}

export interface ICategoryDetailsProps {
  categories: string[];
  categorySelected: string;
  value: string;
  categoryUsers: IUserData[];
}