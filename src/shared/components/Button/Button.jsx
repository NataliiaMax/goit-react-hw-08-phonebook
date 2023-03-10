import style from './Button.module.css';

const Button = ({ children, type='submit' }) => {
  return <button type={type} className={style.button}>{children}</button>;
};

export default Button;
