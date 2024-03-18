import { Menubar } from 'primereact/menubar';
import menuItems from './model';

function Navbar() {
  return (
    <div className="flex align-items-center ml-4">
      <div
        className=' bg-auto bg-no-repeat bg-center bg-primary border-noround-left border-noround-bottom border-circle w-6rem h-2rem mr-4'
        style={{ backgroundImage: `url('/vite.svg')` }}
      ></div>
      <Menubar model={menuItems} className='bg-white border-none' />
    </div>
  );
}

export default Navbar;
