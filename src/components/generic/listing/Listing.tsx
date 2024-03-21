import { DataTable } from 'primereact/datatable';
import { IListingProps } from './model';
import ListingColumn from './ListingColumn';
import { Column } from 'primereact/column';

const Listing = ({ columns, records, header }: IListingProps) => {
  return (
    <DataTable
      header={header}
      value={records}
      paginator
      paginatorTemplate='PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown'
      rowsPerPageOptions={[10, 25, 50]}
      rows={5}
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
