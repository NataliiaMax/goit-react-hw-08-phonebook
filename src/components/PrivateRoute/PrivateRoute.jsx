import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getLoginedUser } from 'redux/users/users-selectors';
import Loader from 'components/Loader/Loader';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getLoginedUser);

  if (!isLogin && token) {
    return <Loader/>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
