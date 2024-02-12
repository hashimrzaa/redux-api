import { configureStore } from "@reduxjs/toolkit";
import todoreducers from "../reducers/todoslice";

export const store = configureStore({
  reducer: todoreducers
});
