import { useLoaderData, useParams } from 'react-router-dom';
import { ILoaderData } from '../../router/loaders';
import MainLayout from '../generic/layout/MainLayout';
import CategoryDetails from './CategoryDetails';

function Category() {
  const params = useParams();
  const categorySelected = params['category'] || '';

  const { categories, categoryUsers } = useLoaderData() as ILoaderData;

  return (
    <MainLayout>
      <CategoryDetails
        key={categorySelected}
        categories={categories}
        categorySelected={categorySelected}
        categoryUsers={categoryUsers}
        value={categories?.[0]}
      />
    </MainLayout>
  );
}

export default Category;
