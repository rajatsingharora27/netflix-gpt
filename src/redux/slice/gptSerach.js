const { createSlice } = require("@reduxjs/toolkit");

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    currentGptSearch: false,
    gptMovies: null,
    movieNames: null,
    errorMessage: "",
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
    addErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    removeErrorMessage: (state, action) => {
      state.errorMessage = "";
    },
  },
});

export const {
  toggleGptSearch,
  addGptMovieResult,
  addErrorMessage,
  removeErrorMessage,
} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
