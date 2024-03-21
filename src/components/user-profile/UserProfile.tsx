import { Button } from 'primereact/button';
import { useContext } from 'react';
import { Context } from '../../services/context-service';
import DialogFormLayout from '../forms/DialogFormLayout';
import CreateUserForm from '../forms/create-user/CreateUserForm';

const UserProfile = () => {
  const { dialog } = useContext(Context);

  return (
    <>
      <div
        className='bg-auto bg-no-repeat bg-center bg-primary border-circle w-10rem h-10rem mr-4'
        style={{ backgroundImage: `url('/vite.svg')` }}
      >
        {/* <i className="pi pi-users"></i> */}
      </div>
      {/* <h1>{name}</h1>
      <p>{title}</p> */}
      <Button
        label='Edit Employee'
        icon='pi pi-user-edit'
        className='flex-2'
        text
        raised
        onClick={() =>
          dialog.toggleOpen(
            <DialogFormLayout>
              <CreateUserForm values={{}} />
            </DialogFormLayout>
          )
        }
      />
    </>
  );
};

export default UserProfile;
