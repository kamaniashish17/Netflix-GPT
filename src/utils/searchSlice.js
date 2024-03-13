import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "Search",
  initialState: {
    showGPTSearch: false,
    gptSearchedMovies: null,
    searchResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTResultMovies: (state, action) => {
      const { gptMovieNames, gptMovieDetails } = action.payload;
      state.gptSearchedMovies = gptMovieDetails;
      state.searchResults = gptMovieNames;
    },
  },
});

export const { toggleGPTSearchView, addGPTResultMovies } = searchSlice.actions;

export default searchSlice.reducer;
