import TextField from 'shared/components/TextField/TextField';
import useForm from 'shared/hook/useForm';
import fields from './fields';
import initialState from './initialState';
import Button from 'shared/components/Button/Button';
import style from './RegisterForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField value={password} handleChange={handleChange} {...fields.password} />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
