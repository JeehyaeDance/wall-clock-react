import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timestamp: "",
  cursorX: "",
  cursorY: "",
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    getCurrentTime: (state, action) => {
      state.timestamp = action.payload;
    },
    updateCursorPosition: (state, action) => {
      state.cursorX = action.payload.x;
      state.cursorY = action.payload.y;
    },
  },
});

export const { getCurrentTime, updateCursorPosition } = timeSlice.actions;
export const selectTime = (state) => state.time.timestamp;
export default timeSlice.reducer;
