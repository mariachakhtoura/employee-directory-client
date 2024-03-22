import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Context } from '../../services/context-service';
import DialogFormLayout from '../forms/DialogFormLayout';
import { ILoaderData } from '../../router/loaders';
import {
  capitalizeFirstLetter,
  concatName,
} from '../../common/utils/string-utils';
import MainLayout from '../generic/layout/MainLayout';
import UpdateUserForm from '../forms/update-user/UpdateUserForm';
import InfoDisplay from './InfoDisplay';
import { useTranslation } from 'react-i18next';

const UserProfile = () => {
  const loader = useLoaderData() as ILoaderData;
  const { name, email, picture, country, dob, gender, id } = loader.user;

  const { dialog } = useContext(Context);
  const { t } = useTranslation();

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
            label={t('userprofile.button.label')}
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
        <h2>{t('userprofile.infosection.title')}</h2>
        <InfoDisplay
          info={[
            {
              label: t('forms.user.fields.gender.label'),
              value: capitalizeFirstLetter(gender),
            },
            {
              label: t('forms.user.fields.country.label'),
              value: country,
            },
            {
              label: t('forms.user.fields.dob.label'),
              value: dob,
            },
          ]}
        />
      </div>
    </MainLayout>
  );
};

export default UserProfile;
