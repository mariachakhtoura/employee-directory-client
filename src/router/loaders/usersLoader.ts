import getUsersQuery from '../../queries/getUsers';
import DataService from '../../services/data-service';

export default async function loader() {
  const users = await getUsers();
  return { users };
}

async function getUsers() {
  const response = await DataService.post(getUsersQuery);
  const result = await response.json();
  return result.data.getUsers;
}
