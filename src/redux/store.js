import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./timeSlice";

export const store = configureStore({
  reducer: {
    time: timeSlice,
  },
});
