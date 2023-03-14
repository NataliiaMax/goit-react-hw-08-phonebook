import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/usersRegistration';

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {try{
    const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const data = await api.getCurrent(user.token);
      return data;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);