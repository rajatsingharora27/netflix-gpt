import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import movieReducer from "../slice/movieSlice";
import gptSerachReducer from "../slice/gptSerach";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gptSearch: gptSerachReducer,
  },
});

export default appStore;
