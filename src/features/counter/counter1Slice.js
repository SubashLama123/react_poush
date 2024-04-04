import { createAction, createSlice } from "@reduxjs/toolkit";

export const reset = createAction('app/reset');

export const counterSlice1 = createSlice({
  name: 'countSlice1',
  initialState: {
    count1: 1
  },

  reducers: {
    incre: (state, action) => {
      state.count1 = state.count1 + 1;
    },


  },
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.count1 = 0;
    })
  }

});


export const { incre } = counterSlice1.actions;