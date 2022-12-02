import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    tasks: contactsReducer,
    filters: filterReducer,
  },
});
