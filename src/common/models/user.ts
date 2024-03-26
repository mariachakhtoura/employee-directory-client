export interface IUserData {
  id: string;
  gender: string;
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
  };
}

export enum GenderEnum {
  Female = 'Female',
  Male = 'Male',
}
