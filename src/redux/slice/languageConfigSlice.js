import { createSlice } from "@reduxjs/toolkit";

const languageConfigSlice = createSlice({
  name: "config",
  initialState: {
    lang: "English",
  },
  reducers: {
    changeLanguage: (state, actions) => {
      state.lang = actions.payload;
    },
  },
});

export const { changeLanguage } = languageConfigSlice.actions;
export default languageConfigSlice.reducer;
