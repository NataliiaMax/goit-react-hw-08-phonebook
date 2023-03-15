import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import style from './TextField.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={style.wrapper}>
      <label htmlFor={id}>
        {label}</label>
           <input 
        className={style.field}
        id={id}
        onChange={handleChange}
        {...props}
        type="text"
      /> 
    </div>
  );
};

export default TextField;
