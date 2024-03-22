import CreateUserForm from '../create-user/CreateUserForm';
import { IUpdateUserFormProps } from './model';

function UpdateUserForm(props: IUpdateUserFormProps) {
  return <CreateUserForm {...props} />;
}

export default UpdateUserForm;
