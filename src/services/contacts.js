import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/api/users',
});

export const signup = async (data) => {
  const { data: result } = await contactsInstance.post('/signup', data);
  return result;
};

export const addLoginContact = async data => {
  const { data: result } = await contactsInstance.post('/login', data);
  return result;
};

export const logoutContact = async data => {
  const { data: result } = await contactsInstance.post('/logout', data);
  return result;
};
