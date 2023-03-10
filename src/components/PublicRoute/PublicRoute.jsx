import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUser } from 'redux/users/users-selectors';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getUser);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
