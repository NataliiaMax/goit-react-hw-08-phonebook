import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'shared/components/TextField/TextField';
import useForm from 'shared/hook/useForm';
import fields from './fields';
import initialState from './initialState';
import Button from 'shared/components/Button/Button';
import style from './LoginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <TextField
        className={style.field}
        value={email}
        handleChange={handleChange}
        {...fields.email}
      />{' '}
      <TextField
        className={style.field}
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button className={style.btn}>Login</Button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
