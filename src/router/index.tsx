import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AppError from "../AppError";
import Category from "../components/category/Category";
import UserDetails from "../components/user-details/UserDetails";
import UserProfile from "../components/user-profile/UserProfile";
import usersLoader from "./loaders/usersLoader";
import deleteUserAction from "./actions/deleteUserAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <AppError />,
    children: [
      {
        path: "/",
        loader: usersLoader,
        action: deleteUserAction,
        element: <UserDetails />,
      },
      {
        path: "/:userId",
        element: <UserProfile />,
        
      },
      {
        path: "/category/:category",
        element: <Category />,
      },
    ],
  },
]);

export default router;