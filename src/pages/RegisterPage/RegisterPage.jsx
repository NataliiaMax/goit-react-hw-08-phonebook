import { useDispatch } from 'react-redux';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from '../../redux/users/users-operations';
import style from './RegisterPage.module.css'

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => dispatch(signup(data));

  return (
    <div className={style.container}>
      <h2 className={style.title}>RegisterPage</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
