import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Context } from '../../services/context-service';
import DialogFormLayout from '../forms/DialogFormLayout';
import CreateUserForm from '../forms/create-user/CreateUserForm';
import { ILoaderData } from '../../router/loaders';
import { concatName } from '../../common/utils/string-utils';

const UserProfile = () => {
  const loader = useLoaderData() as ILoaderData;
  const { name, email, picture, country, dob, gender, id } = loader.user;
  const { dialog } = useContext(Context);

  return (
    <>
      <Image
        src={picture.large}
        className='border-circle w-10rem h-10rem mr-4'
      />
      <h1>{concatName(name)}</h1>
      <p>{email}</p>
      <Button
        label='Edit Employee'
        icon='pi pi-user-edit'
        className='flex-2'
        text
        raised
        onClick={() =>
          dialog.toggleOpen(
            <DialogFormLayout>
              <CreateUserForm
                values={{
                  firstName: name.first,
                  lastName: name.last,
                  email,
                  country,
                  dob: new Date(dob),
                  gender,
                }}
              />
            </DialogFormLayout>
          )
        }
      />
    </>
  );
};

export default UserProfile;
