export interface IUserData {
  id: string;
  gender: GenderEnum;
  country: string;
  dob: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
}

export enum GenderEnum {
  female = "female",
  male = "male",
}