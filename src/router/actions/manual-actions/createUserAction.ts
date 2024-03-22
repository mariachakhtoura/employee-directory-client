import DataService from '../../../services/data-service';
import createUserQuery from '../../../queries/createUser';
import { IUserData } from '../../../common/models/user';
import { ICreateUserInputs } from '../../../components/forms/create-user/model';
import { mapUserToUserData } from '../../../common/utils/user-utils';

export async function createUserAction(user: ICreateUserInputs) {
  const userData = mapUserToUserData(user);
  const userResult = await createUser(userData);
  return { user: userResult };
}

async function createUser(user: Partial<IUserData>): Promise<IUserData> {
  const response = await DataService.post(createUserQuery, user);
  const result = await response.json();
  return result.data.createUser;
}
