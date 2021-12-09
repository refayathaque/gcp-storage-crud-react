import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
import movies from "./movies-slice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // part of ReduxBasics component
    auth: authReducer, // part of ReduxBasics component
    movies, // part of AdvancedRedux component and uses mirage, also used "Object Property Value Shorthand in JavaScript with ES6" here
  },
});

export default store;
