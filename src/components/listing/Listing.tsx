import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";

const Listing = () => {
  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={""}
            onChange={() => {}}
            placeholder="Search employees"
          />
        </span>
      </div>
    );
  };

  const linkBodyTemplate = (data: any) => {
    return <Link to={`/${data.code}`}>{data.code}</Link>;
  };

  const deleteActionBodyTemplate = () => {
    return (
      <Button
        type="button"
        icon="pi pi-trash"
        className="bg-red-600 border-transparent w-2rem h-2rem"
      ></Button>
    );
  };

  const header = renderHeader();

  return (
    <>
      <DataTable
        header={header}
        value={[
          {
            code: "1234",
            name: "1234",
            category: "1234",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
          {
            code: "123",
            name: "123",
            category: "123",
          },
        ]}
        paginator
        paginatorTemplate="PrevPageLink CurrentPageReport NextPageLink RowsPerPageDropdown"
        rowsPerPageOptions={[10, 25, 50]}
        rows={10}
        rowHover
        currentPageReportTemplate="{first} - {last} of {totalRecords}"
        emptyMessage="No data"
      >
        <Column field="code" header="Code" body={linkBodyTemplate} />
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column
          headerStyle={{ width: "2rem", textAlign: "center" }}
          bodyStyle={{ textAlign: "center", overflow: "visible" }}
          body={deleteActionBodyTemplate}
        />
      </DataTable>
    </>
  );
};

export default Listing;
