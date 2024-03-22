import DataService from '../../../services/data-service';
import { mapUserToUserData } from '../../../common/utils/user-utils';
import updateUserQuery from '../../../queries/updateUser';
import { IUserData } from '../../../common/models/user';
import { ICreateUserInputs } from '../../../components/forms/create-user/model';

export default async function updateUserAction(user: ICreateUserInputs) {
  const id = user.id;
  if (!id) return { users: [] };

  const userData = mapUserToUserData(user);
  const users = await updateUser(userData);
  return { users };
}

async function updateUser(user: Partial<IUserData>): Promise<IUserData> {
  const response = await DataService.post(updateUserQuery, user);
  const result = await response.json();
  return result.data.updateUser;
}
