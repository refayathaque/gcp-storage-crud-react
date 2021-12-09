import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
import getMoviesReducer from "./movies/get-slice";
import postMoviesReducer from "./movies/post-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // part of ReduxBasics component
    auth: authReducer, // part of ReduxBasics component
    getMoviesReducer, // part of AdvancedRedux component and uses mirage
    postMoviesReducer, // part of AdvancedRedux component and uses mirage
  },
});

export default store;
