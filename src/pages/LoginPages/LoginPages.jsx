import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/users/users-operations';
import LoginForm from 'components/LoginForm/LoginForm';
import style from './LoginPage.module.css';
import { isUserLogin } from 'redux/users/users-selectors';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => dispatch(login(data));
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={style.container}>
      <h2 className={style.pageTitle}>Enter your login please</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
