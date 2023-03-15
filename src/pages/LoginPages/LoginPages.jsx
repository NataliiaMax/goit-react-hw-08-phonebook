import { useDispatch } from 'react-redux';
import { login } from '../../redux/users/users-operations';
import LoginForm from 'components/LoginForm/LoginForm';
import style from './LoginPage.module.css'

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => dispatch(login(data));

  return (
    <div className={style.container}>
      <h2 className={style.pageTitle}>Enter your login please</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
