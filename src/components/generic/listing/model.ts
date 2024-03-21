import { ComponentProps } from 'react';
import { Column } from 'primereact/column';
import Listing from './Listing';

export interface IListingProps {
  columns: IListingColumn[];
  records: Record<string, unknown>[];
}

export interface IListingColumn extends ComponentProps<typeof Column> {
  id: string;
  type?: ListingColumnType;
}

export enum ListingColumnType {
  Link = 'Link',
  Action = 'Action'
}

export type ListingColumn = ComponentProps<typeof Listing>['columns']