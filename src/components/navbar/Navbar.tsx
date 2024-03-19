import { Menubar } from "primereact/menubar";
import menuItems from "./model";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex align-items-center ml-4">
      <div
        className="bg-auto bg-no-repeat bg-center bg-primary border-noround-left border-noround-bottom border-circle w-6rem h-2rem mr-4"
        style={{ backgroundImage: `url('/vite.svg')` }}
      >
        {/* <i className="pi pi-users"></i> */}
      </div>
      <Menubar model={menuItems(navigate)} className="bg-white border-none" />
    </div>
  );
}

export default Navbar;
