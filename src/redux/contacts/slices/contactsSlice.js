import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from 'redux/contacts/operations';
import {
  addContactSuccessReducer,
  deleteContactSuccessReducer,
  editContactSuccessReducer,
  fetchContactsSuccessReducer,
  fulfilledReducer,
  pendingReducer,
  rejectedReducer,
} from './helpers/contactsReducers';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchContacts, addContact, deleteContact, editContact];

const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addCase(editContact.fulfilled, editContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
