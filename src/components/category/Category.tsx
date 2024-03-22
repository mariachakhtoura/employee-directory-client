import { useLoaderData, useParams } from 'react-router-dom';
import { ILoaderData } from '../../router/loaders';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { capitalizeFirstLetter } from '../../common/utils/string-utils';
import Listing from '../generic/listing/Listing';
import { mapRecords } from '../../common/utils/user-utils';
import { getUsersByCategory } from '../../router/loaders/categoryLoader';
import { COLUMNS } from '../user-listing/model';

function Category() {
  const params = useParams();
  const categorySelected = params['category'] || '';
  const { categories } = useLoaderData() as ILoaderData;
  const [values, setValues] = useState<{
    selectedValue: string;
    users: Record<string, unknown>[];
  }>({
    selectedValue: categories?.[0],
    users: [],
  });

  return (
    <>
      <h1>{`Display: By ${capitalizeFirstLetter(categorySelected)}`}</h1>
      <Dropdown
        value={values.selectedValue}
        onChange={async (event) => {
          const selectedValue = event.target.value;
          const users = await getUsers(categorySelected, selectedValue);
          setValues({
            selectedValue,
            users,
          });
        }}
        options={categories.map((category) => ({
          label: category,
          value: category,
        }))}
      />
      <Listing columns={COLUMNS} records={values.users} />
    </>
  );
}

const getUsers = async (categorySelected: string, selectedValue: string) => {
  const users = await getUsersByCategory(categorySelected, selectedValue);
  return mapRecords(users);
};

export default Category;
