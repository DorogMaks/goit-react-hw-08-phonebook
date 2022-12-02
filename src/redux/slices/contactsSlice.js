import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';
import {
  addContactSuccessReducer,
  deleteContactSuccessReducer,
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

const extraActions = [fetchContacts, addContact, deleteContact];

const getAtions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getAtions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getAtions('fulfilled')), fulfilledReducer)
      .addMatcher(isAnyOf(...getAtions('rejected')), rejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
