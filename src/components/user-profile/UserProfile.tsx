import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Context } from '../../services/context-service';
import DialogFormLayout from '../forms/DialogFormLayout';
import { ILoaderData } from '../../router/loaders';
import { capitalizeFirstLetter, concatName } from '../../common/utils/string-utils';
import MainLayout from '../generic/layout/MainLayout';
import UpdateUserForm from '../forms/update-user/UpdateUserForm';
import InfoDisplay from './InfoDisplay';

const UserProfile = () => {
  const loader = useLoaderData() as ILoaderData;
  const { name, email, picture, country, dob, gender, id } = loader.user;
  const { dialog } = useContext(Context);

  return (
    <MainLayout className='bg-blue-50 h-full'>
      <div className='flex mb-3'>
        <img
          src={picture.large}
          className='border-circle w-10rem h-10rem mr-4 max-w-15rem'
        />
        <div>
          <h1>{concatName(name)}</h1>
          <p>{email}</p>
          <Button
            label='Edit Employee'
            icon='pi pi-user-edit'
            className='flex-2 my-1'
            text
            raised
            onClick={() =>
              dialog.toggleOpen(
                <DialogFormLayout>
                  <UpdateUserForm
                    values={{
                      id,
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
        </div>
      </div>
      <div>
        <h2>Contact Information</h2>
        <InfoDisplay
          info={[
            {
              label: 'Gender',
              value: capitalizeFirstLetter(gender),
            },
            {
              label: 'Country',
              value: country,
            },
            {
              label: 'Date of Birth',
              value: dob,
            },
          ]}
        />
      </div>
    </MainLayout>
  );
};

export default UserProfile;
