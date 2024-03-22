import { MenuItem } from 'primereact/menuitem';
import MenuItemLink from './MenuItemLink';

const menuItems: MenuItem[] = [
  {
    id: 'users',
    url: '/',
    icon: 'pi pi-users',
    label: 'All Employees',
    template: MenuItemLink,
  },
  {
    id: 'categories',
    label: 'Categories',
    items: [
      {
        id: 'country',
        label: 'Country',
        url: '/category/country',
        template: MenuItemLink,
      },
      {
        id: 'gender',
        label: 'Gender',
        url: '/category/gender',
        template: MenuItemLink,
      },
    ],
  },
];

export default menuItems;
