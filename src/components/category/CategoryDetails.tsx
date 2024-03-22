import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { capitalizeFirstLetter } from '../../common/utils/string-utils';
import Listing from '../generic/listing/Listing';
import { mapRecords } from '../../common/utils/user-utils';
import { getUsersByCategory } from '../../router/loaders/categoryLoader';
import { COLUMNS } from '../user-listing/model';
import { ICategoryDetailsProps, ICategoryValue } from './model';
import { useTranslation } from 'react-i18next';

function CategoryDetails({
  categories,
  categorySelected,
  value,
  categoryUsers,
}: ICategoryDetailsProps) {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState<ICategoryValue>(() =>
    getCategoryValue(value)
  );
  const [users, setUsers] = useState(() => mapRecords(categoryUsers));

  const categoryValues: ICategoryValue[] = categories.map((category) => ({
    name: category,
    code: category,
  }));

  return (
    <div className='fadein'>
      <div className='flex gap-6 align-items-center mb-4'>
        <h1>{`${t('general.display-by')} ${capitalizeFirstLetter(value)}`}</h1>
        <Dropdown
          value={selectedValue}
          onChange={async (event) => {
            const selectedValue = event.value;
            const users = await getUsers(categorySelected, selectedValue.code);
            setUsers(users);
            setSelectedValue(selectedValue);
          }}
          options={categoryValues}
          optionLabel='name'
        />
      </div>
      <Listing columns={COLUMNS} records={users} />
    </div>
  );
}

const getUsers = async (categorySelected: string, selectedValue: string) => {
  const users = await getUsersByCategory(categorySelected, selectedValue);
  return mapRecords(users);
};

function getCategoryValue(value: string): ICategoryValue {
  return {
    name: value,
    code: value,
  };
}

export default CategoryDetails;
