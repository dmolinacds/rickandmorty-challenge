import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCharacters } from '../api/rickAndMortyApi';

const initialState = {
  pending: false,
  characters: [],
  pagination: {},
  page: 1,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (page, { rejectWithValue }) => {
    try {
      const response = await getAllCharacters(page);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.error);
    }
  }
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.error = null;
        state.pending = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.error = null;
        state.pending = false;
        state.characters = [...state.characters, ...action.payload?.results];
        state.pagination = action.payload?.info;
        state.page = state.page + 1;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.error = action.payload;
        state.pending = false;
      });
  },
});

export const selectCharactersError = (state) => state.characters.error;
export const selectCharactersPending = (state) => state.characters.pending;
export const selectCharacters = (state) => state.characters.characters;
export const selectCharactersPagination = (state) => state.characters.pagination;
export const selectCurrentPage = (state) => state.characters.page;

export default charactersSlice.reducer;