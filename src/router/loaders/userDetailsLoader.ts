import { LoaderFunctionArgs } from 'react-router-dom';
import getUserByIdQuery from '../../queries/getUserById';
import DataService from '../../services/data-service';

export default async function userDetailsLoader({
  params,
}: LoaderFunctionArgs<unknown>) {
  const id = params.userId || ''
  const user = await getUserDetails(id);
  return { user };
}

async function getUserDetails(id: string) {
  const response = await DataService.post(getUserByIdQuery, {
    id,
  });
  const result = await response.json();
  return result.data.getUserById;
}
