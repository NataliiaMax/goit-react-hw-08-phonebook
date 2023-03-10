import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getLoginedUser } from 'redux/users/users-selectors';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getLoginedUser);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
