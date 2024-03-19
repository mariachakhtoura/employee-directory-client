import { MenuItem } from "primereact/menuitem";
import { NavigateFunction } from "react-router-dom";

const menuItems = (navigate: NavigateFunction): MenuItem[] => [
  {
    id: "users",
    label: "All Employees",
    url: "/",
    command: (data) => {
      const { originalEvent, item } = data;
      originalEvent.preventDefault();
      navigate(item.url || "");
    },
  },
  {
    id: "categories",
    label: "Categories",
    items: [
      {
        id: "country",
        label: "Country",
        url: "/category/country",
        command: (data) => {
          const { originalEvent, item } = data;
          originalEvent.preventDefault();
          navigate(item.url || "");
        },
      },
      {
        id: "gender",
        label: "Gender",
        url: "/category/gender",
        command: (data) => {
          const { originalEvent, item } = data;
          originalEvent.preventDefault();
          navigate(item.url || "");
        },
      },
    ],
  },
];

export default menuItems;
