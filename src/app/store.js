import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { counterSlice1 } from "../features/counter/counter1Slice";




export const store = configureStore({
  reducer: {
    countSlice: counterSlice.reducer,
    countSlice1: counterSlice1.reducer
  }
});