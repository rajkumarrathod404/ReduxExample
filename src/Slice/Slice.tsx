import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

export const counterSlice = createSlice({
  // action
  name: "Mycounter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
