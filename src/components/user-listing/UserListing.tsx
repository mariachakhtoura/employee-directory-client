import {
  FetcherWithComponents,
  useFetcher,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import Listing from '../generic/listing/Listing';
import SectionHeader from '../generic/section/SectionHeader';
import { COLUMNS } from './model';
import { ListingColumn, ListingColumnType } from '../generic/listing/model';
import SearchBar from '../generic/search/SearchBar';
import { Context } from '../../services/context-service';
import DialogFormLayout from '../forms/DialogFormLayout';
import CreateUserForm from '../forms/create-user/CreateUserForm';
import { ILoaderData } from '../../router/loaders';
import { mapRecords } from '../../common/utils/user-utils';
import MainLayout from '../generic/layout/MainLayout';
import { useTranslation } from 'react-i18next';
import { createUserAction } from '../../router/actions/manual-actions/createUserAction';

function UserListing() {
  const [searchValue, setSearchValue] = useState<string>('');
  const { dialog } = useContext(Context);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const loader = useLoaderData() as ILoaderData;
  const users = fetcher.data?.users || loader.users;

  const userRecords = mapRecords(users, searchValue);
  const deleteAction = getDeleteUserAction(fetcher);

  const columns: ListingColumn = [...COLUMNS, deleteAction];

  return (
    <MainLayout>
      <div className='w-full flex-2'>
        <SectionHeader
          title={t('userlisting.header.title')}
          buttonLabel={t('userlisting.header.button.label')}
          onButtonClick={() => {
            dialog.toggleOpen(
              <DialogFormLayout>
                <CreateUserForm
                  onSubmit={async (data) => {
                    const { user } = await createUserAction(data);
                    navigate(`/${user.id}`);
                    dialog.toggleOpen();
                  }}
                />
              </DialogFormLayout>
            );
          }}
        />
        <p className='text-xl text-500 font-medium'>{t('userlisting.title')}</p>
        <Listing
          columns={columns}
          records={userRecords}
          header={
            <SearchBar
              value={searchValue}
              placeholder={t('userlisting.searchbox.placeholder')}
              onSearch={(value) => {
                setSearchValue(value);
              }}
            />
          }
        />
      </div>
    </MainLayout>
  );
}

function getDeleteUserAction(fetcher: FetcherWithComponents<unknown>) {
  return {
    id: 'delete',
    field: 'delete',
    header: '',
    headerStyle: { width: '2rem', textAlign: 'center' as const },
    bodyStyle: { textAlign: 'center' as const, overflow: 'visible' },
    body: (data: Record<string, string>) => {
      return (
        <fetcher.Form method='post'>
          <Button
            icon='pi pi-trash'
            name='id'
            value={data.id}
            className='bg-red-600 border-transparent w-2rem h-2rem'
          />
        </fetcher.Form>
      );
    },
    type: ListingColumnType.Action,
  };
}

export default UserListing;
