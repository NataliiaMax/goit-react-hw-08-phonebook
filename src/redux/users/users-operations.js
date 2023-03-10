import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/usersRegistration';

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.signup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
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
      return rejectWithValue(response);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState();
      if (!user.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
