import { ActionFunctionArgs } from 'react-router-dom';
import createUserAction from './user/createUserAction';
import deleteUserAction from './user/deleteUserAction';
import { Forms } from '../../common/models/form';

export default async function formAction(args: ActionFunctionArgs) {
  const { request } = args;
  const formData = await request.formData();
  const intent = formData.get('intent') || '';

  return actionsFn[intent as Forms](formData);
}

const actionsFn: Record<Forms, Function> = {
  [Forms.createUser]: createUserAction,
  [Forms.deleteUser]: deleteUserAction,
};
