import { ICreateUserInputs } from '../../components/forms/create-user/model';
import { GenderEnum, IUserData } from '../models/user';
import { formatDate } from './date-utils';
import { isString, concatName, capitalizeFirstLetter } from './string-utils';

export function mapRecords(users: IUserData[], searchValue?: string) {
  let filteredUsers = users;
  if (isString(searchValue)) {
    filteredUsers = users.filter((user) =>
      JSON.stringify(user.name)
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
  }

  return filteredUsers.map((user) => ({
    id: user.id,
    name: concatName(user.name),
    dob: formatDate(user.dob),
    gender: capitalizeFirstLetter(user.gender),
    country: user.country,
  }));
}

export function getUserTitle(gender: GenderEnum) {
  switch (gender) {
    case GenderEnum.Female:
      return 'Ms.';
    case GenderEnum.Male:
      return 'Mr.';
  }
}

export function mapUserToUserData(user: ICreateUserInputs): Partial<IUserData> {
  return {
    id: user.id,
    name: {
      title: getUserTitle(user.gender?.gender),
      first: user.firstName,
      last: user.lastName,
    },
    email: user.email,
    dob: user.dob.toString(),
    gender: user.gender?.key,
    country: user.country,
  }
}