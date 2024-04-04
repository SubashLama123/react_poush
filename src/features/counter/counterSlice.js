import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./counter1Slice";

export const counterSlice = createSlice({
  name: 'countSlice',

  initialState: {
    count: 9
  },

  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },


  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.count = 0;
    })
  }


});


export const { increment } = counterSlice.actions;