import CreateUserForm from '../create-user/CreateUserForm';
import { IUpdateUserFormProps } from './model';

function UpdateUserForm({ values }: IUpdateUserFormProps) {
  return <CreateUserForm values={values} />;
}

export default UpdateUserForm;
