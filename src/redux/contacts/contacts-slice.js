import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const initialState = {
  contacts: {
    contacts: [],
    isLoading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, { payload }) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          contacts: payload,
        };
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
      })
      .addCase(addContact.pending, (state, { payload }) => {
        return { ...state, isLoading: true };
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          isLoading: false,
          error: null,
          contacts: [...state.contacts, payload],
        };
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
      })
      .addCase(deleteContact.pending, (state, { payload }) => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          isLoading: false,
          error: null,
          contacts: state.contacts.filter(contact => contact.id !== payload.id),
        };
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        return { ...state, isLoading: false, error: payload };
      });
  },
});

export default contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import * as actions from './contacts-actions';

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [actions.fetchContactsLoading]: store => {
//       store.loading = true;
//     },
//     [actions.fetchContactsSuccess]: (store, { payload }) => {
//       console.log(payload);
//       store.loading = false;
//       store.items = payload;
//     },
//     [actions.fetchContactsError]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [actions.fetchAddContactLoading]: store => {
//       store.loading = true;
//     },
//     [actions.fetchAddContactSuccess]: (store, { payload }) => {
//       store.loading = false;
//       store.items.push(payload);
//     },
//     [actions.fetchAddContactError]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [actions.fetchDeleteContactLoading]: store => {
//       store.loading = true;
//     },
//     [actions.fetchDeleteContactSuccess]: (store, { payload }) => {
//       store.loading = false;
//       const index = store.items.findIndex(item => item.id === payload);
//       store.items.splice(index, 1);
//     },
//     [actions.fetchDeleteContactError]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
