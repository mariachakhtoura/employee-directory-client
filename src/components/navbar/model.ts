import { MenuItem } from "primereact/menuitem"

const menuItems: MenuItem[] = [
  {
    id: 'users',
    label: 'All Employees',
    url: '/all-employees'
  },
  {
    id: 'actions',
    label: 'Actions',
    items: [
      {
        id: 'createuser',
        label: 'Add New Employee',
        url: '/new-employee'
      },
      {
        id: 'updateuser',
        label: 'Update Employee',
        url: '/edit-employee'
      },
      {
        id: 'deleteuser',
        label: 'Remove Employee',
        url: '/delete-employee'
      },
    ]
  }
]

export default menuItems