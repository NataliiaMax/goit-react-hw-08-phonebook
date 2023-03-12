import TextField from 'shared/components/TextField/TextField';
import useForm from 'shared/hook/useForm';
import fields from './fields';
import initialState from './initialState';
import Button from 'shared/components/Button/Button';
import style from './RegisterForm.module.css';
// import { useState } from 'react';
import { PropTypes } from 'prop-types';


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
      <Button>Sign up</Button>
    </form>
  );
};

// // export default RegisterForm;



// const RegisterForm = ({ onSubmit }) => {
//   const [state, setState] = useState(initialState);
//   const { name, email, password } = state;

//   const hanldeChange = event => {
//     const { name, value } = event.target;

//     setState(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const hanldeSubmit = event => {
//     event.preventDefault();

//     onSubmit(state);

//     resetForm();
//   };

//   const resetForm = () => {
//     setState(initialState);
//   };

//   return (
//     <form className={styles.form} onSubmit={hanldeSubmit}>
//       <label className={styles.label}>
//         <span className={styles.text}>Name</span>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your name"
//           aria-label="Input for your name"
//           className={styles.input}
//           value={name}
//           onChange={hanldeChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//           required
//         />
//       </label>

//       <label className={styles.label}>
//         <span className={styles.text}>Email</span>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={hanldeChange}
//           className={styles.input}
//           placeholder="Your e-mail"
//           aria-label="Input for your Email"
//           required
//         />
//       </label>

//       <label className={styles.label}>
//         <span className={styles.text}>Password</span>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={hanldeChange}
//           className={styles.input}
//           placeholder="Should be at least 7 characters"
//           aria-label="Input for your password"
//           required
//         />
//       </label>

//       <div className={styles.container}>
//         <button type="submit" className={styles.button}>
//           Create account
//         </button>
//       </div>
//     </form>
//   );
// };

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default RegisterForm;
