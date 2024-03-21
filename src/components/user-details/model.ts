import { ListingColumn, ListingColumnType } from '../generic/listing/model';

export const COLUMNS: ListingColumn = [
  { id: 'name', field: 'name', header: 'Name', type: ListingColumnType.Link },
  { id: 'dob', field: 'dob', header: 'Date of Birth' },
  { id: 'gender', field: 'gender', header: 'Gender' },
  { id: 'country', field: 'country', header: 'Country' },
];
