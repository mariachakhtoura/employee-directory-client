import { DataTable } from 'primereact/datatable';
import { IListingProps } from './model';
import SearchHeader from './SearchHeader';
import ListingColumn from './ListingColumn';
import { Column } from 'primereact/column';

const Listing = ({ columns, records }: IListingProps) => {
  return (
    <DataTable
      header={<SearchHeader />}
      value={records}
      paginator
      paginatorTemplate='PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown'
      rowsPerPageOptions={[10, 25, 50]}
      rows={10}
      rowHover
      currentPageReportTemplate='{first} - {last} of {totalRecords}'
      emptyMessage='No data'
    >
      {columns.map((column) => {
        const columnProps = ListingColumn(column);
        return <Column key={columnProps.id} {...columnProps} />;
      })}
    </DataTable>
  );
};

export default Listing;
