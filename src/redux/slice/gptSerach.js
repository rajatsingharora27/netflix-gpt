const { createSlice } = require("@reduxjs/toolkit");

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    currentGptSearch: false,
  },

  reducers: {
    toggleGptSearch: (state, action) => {
      state.currentGptSearch = !state.currentGptSearch;
    },
  },
});

export const { toggleGptSearch } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
