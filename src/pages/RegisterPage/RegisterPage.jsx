import { useDispatch } from 'react-redux';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { signup } from '../../redux/users/users-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => dispatch(signup(data));

  return (
    <div>
      <h2>RegisterPage</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
