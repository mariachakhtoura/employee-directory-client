import { IListingColumn, ListingColumnType } from './model';
import { Link } from 'react-router-dom';

const ListingColumn = (column: IListingColumn): IListingColumn => {
  if (!column.type) {
    return column;
  }
  switch (column.type) {
    case ListingColumnType.Link: {
      return {
        ...column,
        body: (data) => linkBodyTemplate(data, column.field),
      };
    }
    case ListingColumnType.Action: {
      return { ...column };
    }
  }
};

const linkBodyTemplate = (data: Record<string, string>, field: string = '') => {
  return <Link className='text-color' to={`/${data.id}`}>{data[field]}</Link>;
};

export default ListingColumn;
