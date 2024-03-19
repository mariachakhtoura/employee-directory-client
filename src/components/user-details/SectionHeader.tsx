import { Button } from "primereact/button";

function SectionHeader() {
  return (
    <div className="flex">
      <div className="flex align-items-center flex-1">
        <p className="text-sm font-semibold flex-2">Employees</p>
        <hr className="mx-2 flex-auto flex-5" />
        <Button
          label="Add Employee"
          icon="pi pi-user-plus"
          className="flex-2"
        />
      </div>
    </div>
  );
}

export default SectionHeader;
