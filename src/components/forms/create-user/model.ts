import { GenderEnum } from "../../../common/models/user";

export interface ICreateUserInputs {
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderEnum;
  dob: string;
};

export const GENDERS = Object.keys(GenderEnum).map(key => ({
  label: key,
  value: key
}));