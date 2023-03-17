import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { isUserError } from 'redux/users/users-selectors';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );
  
  const isError = useSelector(isUserError);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
    if (isError) {
      setState(state);
    }
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
