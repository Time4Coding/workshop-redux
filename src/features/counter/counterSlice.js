import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  user: "foulen",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    addAmount(state, { payload }) {
      state.count = state.count + payload;
    },
  },
});
export default counterSlice.reducer;
export const { increment, decrement, addAmount } = counterSlice.actions;

console.log(counterSlice);
