import { Menubar } from 'primereact/menubar';
import menuItems from './model.tsx';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className='header flex align-items-center ml-4'>
      <button
        type='button'
        className='cursor-pointer border-none text-center bg-primary border-noround-left border-noround-bottom border-circle w-6rem h-2rem mr-4'
        onClick={() => {
          navigate('/');
        }}
      >
        <i className='pi pi-users text-4xl text-white'></i>
      </button>
      <Menubar model={menuItems} className='bg-white border-none flex' />
    </div>
  );
}

export default Navbar;
