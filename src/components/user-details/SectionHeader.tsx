import { Button } from 'primereact/button';
import { useContext } from 'react';
import { Context } from '../../services/context-service';
import DialogFormLayout from '../forms/DialogFormLayout';
import CreateUserForm from '../forms/create-user/CreateUserForm';

function SectionHeader() {
  const { dialog } = useContext(Context);
  return (
    <div className='flex'>
      <div className='flex align-items-center flex-1'>
        <p className='text-sm font-semibold flex-2'>Employees</p>
        <hr className='mx-2 flex-auto flex-5' />
        <Button
          label='Add Employee'
          icon='pi pi-user-plus'
          className='flex-2'
          onClick={() =>
            dialog.toggleOpen(
              <DialogFormLayout>
                <CreateUserForm />
              </DialogFormLayout>
            )
          }
        />
      </div>
    </div>
  );
}

export default SectionHeader;
