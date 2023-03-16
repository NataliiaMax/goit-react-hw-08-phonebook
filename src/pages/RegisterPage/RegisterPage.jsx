import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from '../../redux/users/users-operations';
import { isUserLogin } from 'redux/users/users-selectors';
import style from './RegisterPage.module.css';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleSignup = data => dispatch(signup(data));
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className={style.container}>
      <h2 className={style.title}>Create your account please</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
