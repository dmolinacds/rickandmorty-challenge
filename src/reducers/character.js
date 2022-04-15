import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacter } from '../api/rickAndMortyApi';

const initialState = {
  pending: false,
  character: {},
};

export const fetchCharacter = createAsyncThunk(
  'character/fetchCharacter',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCharacter(id);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.error);
    }
  }
);

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.error = null;
        state.pending = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.error = null;
        state.pending = false;
        state.character = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.error = action.payload;
        state.pending = false;
      });
  },
});

export const selectCharacterError = (state) => state.characters.error;
export const selectCharacterPending = (state) => state.characters.pending;
export const selectCharacter = (state) => state.character.character;

export default characterSlice.reducer;