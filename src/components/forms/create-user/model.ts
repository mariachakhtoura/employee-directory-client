import { GenderEnum } from "../../../common/models/user";

export interface ICreateUserInputs {
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderEnum;
  dob: Date;
  country: string;
};

export const GENDERS = [
  {
    key: 'female',
    gender: 'female',
  },
  {
    key: 'male',
    gender: 'male',
  }
]