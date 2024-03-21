import { FetcherWithComponents, useFetcher } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import Listing from '../generic/listing/Listing';
import SectionHeader from '../generic/section/SectionHeader';
import { COLUMNS } from './model';
import { ListingColumn, ListingColumnType } from '../generic/listing/model';
import { IUserData } from '../../common/models/user';
import {
  capitalizeFirstLetter,
  concatName,
} from '../../common/utils/string-utils';
import { formatDate } from '../../common/utils/date-utils';
import SearchBar from '../generic/search/SearchBar';
import { Context } from '../../services/context-service';
import DialogFormLayout from '../forms/DialogFormLayout';
import CreateUserForm from '../forms/create-user/CreateUserForm';

function UserDetails() {
  const [searchValue, setSearchValue] = useState<string>('');
  const { dialog } = useContext(Context);
  const fetcher = useFetcher();
  const { users } = fetcher.data ?? { users: [] };
  const userRecords = mapRecords(users, searchValue);
  const deleteAction = getDeleteUserAction(fetcher);
  const columns: ListingColumn = [...COLUMNS, deleteAction];

  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load('/');
    }
  }, [fetcher]);

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
                    <CreateUserForm />
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

function mapRecords(users: IUserData[], searchValue: string) {
  return users
    .filter((user) =>
      JSON.stringify(user.name)
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )
    .map((user) => ({
      id: user.id,
      name: concatName(user.name),
      dob: formatDate(user.dob),
      gender: capitalizeFirstLetter(user.gender),
      country: user.country,
    }));
}

function getDeleteUserAction(fetcher: FetcherWithComponents<unknown>) {
  return {
    id: 'delete',
    field: 'delete',
    header: '',
    headerStyle: { width: '2rem', textAlign: 'center' as const },
    bodyStyle: { textAlign: 'center' as const, overflow: 'visible' },
    body: (data: Record<string, string>) => (
      <fetcher.Form method='post'>
        <Button
          name='id'
          icon='pi pi-trash'
          value={data.id}
          className='bg-red-600 border-transparent w-2rem h-2rem'
        />
      </fetcher.Form>
    ),
    type: ListingColumnType.Action,
  };
}

export default UserDetails;
