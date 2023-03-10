import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const result = await api.addContact({ name, phone });
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.deleteContact(id);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

// import axios from 'axios';
// import { toast } from 'react-toastify';
// import * as actions from './contacts-actions';

// export const fetchContacts = () => async dispatch => {
//   dispatch(actions.fetchContactsLoading());

//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(actions.fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error.message));
//     toast.error(error.message);
//   }
// };

// export const addContact = (name, number) => async dispatch => {
//   const contact = { name, number };

//   dispatch(actions.fetchAddContactLoading());

//   try {
//     const { data } = await axios.post('/contacts', contact);

//     toast.success('Added');
//     dispatch(actions.fetchAddContactSuccess(data));
//   } catch (error) {
//     dispatch(actions.fetchAddContactError(error.message));
//     toast.error(error.message);
//   }
// };

// export const deleteContact = id => async dispatch => {
//   dispatch(actions.fetchDeleteContactLoading());

//   try {
//     await axios.delete(`/contacts/${id}`);

//     toast.success('Deleted');
//     dispatch(actions.fetchDeleteContactSuccess(id));
//   } catch (error) {
//     dispatch(actions.fetchDeleteContactError(error.message));
//     toast.error(error.message);
//   }
// };
