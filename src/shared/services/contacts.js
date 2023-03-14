import instance from "./usersRegistration";

export const fetchContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async options => {
  const { data } = await instance.post('/contacts', options);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
