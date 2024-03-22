import { ActionFunctionArgs } from 'react-router-dom';
import DataService from '../../services/data-service';
import deleteUserQuery from '../../queries/deleteUser';

export default async function deleteUserAction(args: ActionFunctionArgs) {
  const { request } = args;
  const formData = await request.formData();
  
  const id = formData.get('id');
  if (!id) return { users: [] };
  const users = await deleteUser(id.toString());
  return { users };
}

async function deleteUser(id: string) {
  const response = await DataService.post(deleteUserQuery, {
    id,
  });
  const result = await response.json();
  return result.data.deleteUser;
}
