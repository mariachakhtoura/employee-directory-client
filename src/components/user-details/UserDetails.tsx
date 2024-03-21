import { useLoaderData } from 'react-router-dom';
import Listing from '../generic/listing/Listing';
import SectionHeader from './SectionHeader';
import { ILoaderData } from '../../router/loaders';
import { COLUMNS } from './model';
import { ListingColumn, ListingColumnType } from '../generic/listing/model';
import { Button } from 'primereact/button';
import { IUserData } from '../../common/models/user';
import { capitalizeFirstLetter, concatName } from '../../common/utils/string-utils';
import { formatDate } from '../../common/utils/date-utils';

function UserDetails() {
  const { users } = useLoaderData() as ILoaderData;
  const userRecords = mapRecords(users);
  const deleteAction = getDeleteUserAction();
  const columns: ListingColumn = [...COLUMNS, deleteAction];

  return (
    <div className='border-y-1 border-50'>
      <div className='ml-4 mt-2 w-auto'>
        <div className='flex'>
          <div className='w-full flex-2'>
            <SectionHeader />
            <p className='text-xl text-500 font-medium'>Employee Directory</p>
            <Listing columns={columns} records={userRecords} />
          </div>
        </div>
      </div>
    </div>
  );
}

function mapRecords(users: IUserData[]) {
  return users.map((user) => ({
    id: user.id,
    name: concatName(user.name),
    dob: formatDate(user.dob),
    gender: capitalizeFirstLetter(user.gender),
    country: user.country,
  }));
}

function getDeleteUserAction() {
  return {
    id: 'delete',
    field: 'delete',
    header: 'delete',
    headerStyle: { width: '2rem', textAlign: 'center' as const },
    bodyStyle: { textAlign: 'center' as const, overflow: 'visible' },
    body: (
      <Button
        type='button'
        icon='pi pi-trash'
        className='bg-red-600 border-transparent w-2rem h-2rem'
        onClick={() => {
          //
        }}
      />
    ),
    type: ListingColumnType.Action,
  };
}

export default UserDetails;
