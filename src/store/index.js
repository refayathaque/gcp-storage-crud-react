import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer, // ReduxBasics
    auth: authReducer, // ReduxBasics
  },
});

export default store;
