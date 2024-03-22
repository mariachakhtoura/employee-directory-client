import { FetcherWithComponents, useFetcher, useLoaderData } from 'react-router-dom';
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
import { Forms } from '../../common/models/form';
import { ILoaderData } from '../../router/loaders';
import { mapRecords } from '../../common/utils/user-utils';

function UserListing() {
  const [searchValue, setSearchValue] = useState<string>('');
  const { dialog } = useContext(Context);

  const fetcher = useFetcher();
  const loader = useLoaderData() as ILoaderData;
  const users = fetcher.data?.users || loader.users;

  const userRecords = mapRecords(users, searchValue);
  const deleteAction = getDeleteUserAction(fetcher);

  const columns: ListingColumn = [...COLUMNS, deleteAction];

  return (
    <div className='border-y-1 border-50'>
      <div className='ml-4 mt-2 w-auto'>
        <div className='flex'>
          <div className='w-full flex-2'>
            <SectionHeader
              title='Employees'
              buttonLabel='Add Employee'
              onButtonClick={() => {
                dialog.toggleOpen(
                  <DialogFormLayout>
                    <fetcher.Form method='post'>
                      <CreateUserForm />
                    </fetcher.Form>
                  </DialogFormLayout>
                );
              }}
            />
            <p className='text-xl text-500 font-medium'>Employee Directory</p>
            <Listing
              columns={columns}
              records={userRecords}
              header={
                <SearchBar
                  value={searchValue}
                  placeholder='Search employees'
                  onSearch={(value) => {
                    setSearchValue(value);
                  }}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
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
        <input hidden name='id' defaultValue={data.id} />
        <Button
          icon='pi pi-trash'
          name='intent'
          value={Forms.deleteUser}
          className='bg-red-600 border-transparent w-2rem h-2rem'
        />
      </fetcher.Form>
    )},
    type: ListingColumnType.Action,
  };
}

export default UserListing;
