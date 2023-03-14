import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const result = await api.addContact({ name, phone });
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.deleteContact(id);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

