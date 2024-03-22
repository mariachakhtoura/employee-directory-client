import { IUserData } from "../models/user";
import { formatDate } from "./date-utils";
import { isString, concatName, capitalizeFirstLetter } from "./string-utils";

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