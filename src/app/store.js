import { configureStore } from '@reduxjs/toolkit';
import characters from '../reducers/characters';

export const store = configureStore({
  reducer: {
    characters,
  },
});
