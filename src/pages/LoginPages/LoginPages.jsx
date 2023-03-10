import { useDispatch } from 'react-redux';
import { login } from '../../redux/users/users-operations';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => dispatch(login(data));

  return (
    <div className="container">
      <h2 className="page-title">LoginPage</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
