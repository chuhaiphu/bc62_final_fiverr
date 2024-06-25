import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import Home from '~/pages/Home';
import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import AdminPage from '~/pages/Admin';
import UserDetail from '~/pages/UserDetail';
import { useUserStore } from '~/store/user-store';
import CourseClassidicationPage from '~/pages/Course-Classification';
import ServiceList from '~/pages/Admin/_Main/_List/Services';
import UserList from '~/pages/Admin/_Main/_List/Users';

// * for user
const ProtectedRoute = () => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
};

const RestrictedRoute = () => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'ADMIN') {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/user',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/user/course',
        element: <CourseClassidicationPage />,
      },
      {
        path: '/user/detail',
        element: <UserDetail />,
      },
    ],
  },
  {
    path: '/admin',
    element: <RestrictedRoute />,
    children: [
      {
        path: '/admin',
        element: <AdminPage />,
        children: [
          {
            path: '',
            element: <UserList />,
          },
          {
            path: '/admin/users',
            element: <UserList />,
          },
          {
            path: '/admin/services',
            element: <ServiceList />,
          },
        ],
      },
    ],
  },
];

const RouteElements = () => {
  const element = useRoutes(routes);
  return element;
};

export default RouteElements;
