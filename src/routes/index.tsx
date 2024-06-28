import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import Home from '~/pages/Home';
import Login from '~/pages/Auth/Login';
import Register from '~/pages/Auth/Register';
import AdminPage from '~/pages/Admin';
import UserDetailPage from '~/pages/UserDetail';
import CourseClassidicationPage from '~/pages/ListJobTypeJob'
import ListJobPage from '~/pages/ListJob';
import JobDetailPage from '~/pages/JobDetail';

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
  },
  {
    path: "user-detail",
    element: <UserDetailPage/>,

  },
  {
    path: "list-job-&-type-job",
    element: <CourseClassidicationPage/>,

  }
  ,
  {
    path: "list-job",
    element: <ListJobPage/>,

  }
  ,
  {
    path: "job-detail",
    element: <JobDetailPage/>,

  }
];

const RouteElements = () => {
  const element = useRoutes(routes);
  return element;
};

export default RouteElements;  