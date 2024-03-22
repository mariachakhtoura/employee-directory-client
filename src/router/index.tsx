import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AppError from '../AppError';
import Category from '../components/category/Category';
import UserListing from '../components/user-listing/UserListing';
import UserProfile from '../components/user-profile/UserProfile';
import usersLoader from './loaders/usersLoader';
import userDetailsLoader from './loaders/userDetailsLoader';
import categoryLoader from './loaders/categoryLoader';
import deleteUserAction from './actions/deleteUserAction';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <AppError />,
    children: [
      {
        path: '/',
        loader: usersLoader,
        action: deleteUserAction,
        element: <UserListing />,
      },
      {
        path: '/:userId',
        loader: userDetailsLoader,
        element: <UserProfile />,
      },
      {
        path: '/category/:category',
        loader: categoryLoader,
        element: <Category />,
      },
    ],
  },
]);

export default router;
