import DataService from '../../../services/data-service';
import createUserQuery from '../../../queries/createUser';
import { GenderEnum } from '../../../common/models/user';
import { getStringFromFormData } from '../../../common/utils/form-utils';

export default async function createUserAction(formData: FormData) {
  const user = {
    name: {
      title: 'Ms',
      first: getStringFromFormData(formData, 'firstName'),
      last: getStringFromFormData(formData, 'lastName'),
    },
    email: getStringFromFormData(formData, 'email'),
    dob: getStringFromFormData(formData, 'dob'),
    gender: formData.get('gender') as GenderEnum,
    country: getStringFromFormData(formData, 'country'),
  };
  const userResult = await createUser(user);
  return { user: userResult };
}

async function createUser(user: Record<string, unknown>) {
  const response = await DataService.post(createUserQuery, user);
  const result = await response.json();
  return result;
}
