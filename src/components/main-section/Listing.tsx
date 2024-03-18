import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';

function Listing() {
  const renderHeader = () => {
    return (
      <div className='flex justify-content-between align-items-center'>
        <span className='p-input-icon-left'>
          <i className='pi pi-search' />
          <InputText
            value={''}
            onChange={() => {}}
            placeholder='Search employees'
          />
        </span>
      </div>
    );
  };

  const editActionBodyTemplate = () => {
    return <Button type="button" icon="pi pi-user-edit bg-primary-reverse" className="border-transparent bg-white w-2rem h-2rem"></Button>;
}
  
const deleteActionBodyTemplate = () => {
    return <Button type="button" icon="pi pi-trash" className="bg-red-600 border-transparent w-2rem h-2rem"></Button>;
}

  const header = renderHeader();

  return (
    <>
      <DataTable
        header={header}
        value={[
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
          {
            code: '123',
            name: '123',
            category: '123',
          },
        ]}
        paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
        rowsPerPageOptions={[10, 25, 50]}
        rows={10}
        rowHover
        currentPageReportTemplate='Showing {first} to {last} of {totalRecords} entries'
        emptyMessage='No customers found.'
      >
        <Column field='code' header='Code'></Column>
        <Column field='name' header='Name'></Column>
        <Column field='category' header='Category'></Column>
        {/* <Column headerStyle={{ width: '2rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={editActionBodyTemplate} /> */}
        <Column headerStyle={{ width: '2rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={deleteActionBodyTemplate} />
      </DataTable>
    </>
  );
}

export default Listing;
