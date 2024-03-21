import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AppError from "../AppError";
import Category from "../components/category/Category";
import UserDetails from "../components/user-details/UserDetails";
import UserProfile from "../components/user-profile/UserProfile";
import rootLoader from "./loaders/rootLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <AppError />,
    children: [
      {
        path: "/",
        loader: rootLoader,
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