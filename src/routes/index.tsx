import { useRoutes } from 'react-router-dom';
import Login from '@Components/authentication/login/Login';
import Signup from '@Components/authentication/signup/Signup';


const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  }
];

const RoutesMap = () => {
  const routeResult = useRoutes(routes);

  return routeResult;
};

export default RoutesMap;
