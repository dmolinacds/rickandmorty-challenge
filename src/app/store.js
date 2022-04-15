import { configureStore } from '@reduxjs/toolkit';
import characters from '../reducers/characters';
import character from '../reducers/character';

export const store = configureStore({
  reducer: {
    characters,
    character,
  },
});
