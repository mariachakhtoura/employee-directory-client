import { MenuItem } from 'primereact/menuitem';
import { NavLink } from 'react-router-dom';

function MenuItemLink(item: MenuItem) {
  return (
    <NavLink
      to={item.url || ''}
      className={({ isActive }) =>
        isActive ? `underline p-menuitem-link` : 'p-menuitem-link'
      }
    >
      {item.label}
    </NavLink>
  );
}

export default MenuItemLink;
