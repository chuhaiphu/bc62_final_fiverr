import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import Home from '~/pages/Home';
import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import AdminPage from '~/pages/Admin';

const ProtectedRoute = () => {
  return <Outlet />
};

const routes = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          // Add any nested routes for the home page if needed
        ],
      },
      {
        path: '/admin',
        element: <AdminPage />,
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }
];

const RouteElements = () => {
  const element = useRoutes(routes);
  return element;
};

export default RouteElements;