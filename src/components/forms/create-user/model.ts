import { GenderEnum } from "../../../common/models/user";
import { capitalizeFirstLetter } from "../../../common/utils/string-utils";

export interface ICreateUserInputs {
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderEnum;
  dob: string;
  country: string;
};

export const GENDERS = Object.keys(GenderEnum).map(key => ({
  code: key,
  name: capitalizeFirstLetter(key),
}));