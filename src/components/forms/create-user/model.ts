import { GenderEnum } from "../../../common/models/user";

export interface ICreateUserInputs {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: {
    key: string;
    gender: GenderEnum;
  };
  dob: Date;
  country: string;
};

export const GENDERS = [
  {
    key: 'female',
    gender: 'Female',
  },
  {
    key: 'male',
    gender: 'Male',
  }
]