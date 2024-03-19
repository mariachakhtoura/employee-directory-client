import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppError from "./AppError";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "./components/user-profile/UserProfile.tsx";
import UserDetails from "./components/user-details/UserDetails.tsx";
import Category from "./components/category/Category.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <AppError />,
    children: [
      {
        path: "/",
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
