const { createSlice } = require("@reduxjs/toolkit");

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    currentGptSearch: false,
    gptMovies: null,
    movieNames: null,
  },

  reducers: {
    toggleGptSearch: (state, action) => {
      state.currentGptSearch = !state.currentGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovies = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearch, addGptMovieResult } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
