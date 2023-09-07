import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import movieReducer from "../slice/movieSlice";
import gptSerachReducer from "../slice/gptSerach";
import langReducer from "../slice/languageConfigSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gptSearch: gptSerachReducer,
    config: langReducer,
  },
});

export default appStore;
