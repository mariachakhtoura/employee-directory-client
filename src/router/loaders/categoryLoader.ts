import { LoaderFunctionArgs } from 'react-router-dom';
import DataService from '../../services/data-service';
import getCategoryValuesQuery from '../../queries/getCategoryValues';
import getUsersByCategoryQuery from '../../queries/getUsersByCategory';

export default async function categoryLoader({
  params,
}: LoaderFunctionArgs<unknown>) {
  const category = params.category || '';
  const categories = await getCategoryValues(category);
  return { categories };
}

async function getCategoryValues(category: string) {
  const response = await DataService.post(getCategoryValuesQuery, {
    category,
  });
  const result = await response.json();
  return result.data.getCategoryValues;
}

export async function getUsersByCategory(category: string, value: string) {
  const response = await DataService.post(getUsersByCategoryQuery, {
    category,
    value,
  });
  const result = await response.json();
  return result.data.getUsersByCategory;
}
