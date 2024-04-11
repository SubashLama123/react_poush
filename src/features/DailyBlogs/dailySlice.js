import { createSlice } from "@reduxjs/toolkit";
import { getBlogsFromLocal, setToLocal } from "../storage/local_cache";


export const dailySlice = createSlice({
  name: 'dailySlice',


  initialState: {
    blogs: getBlogsFromLocal()
  },

  reducers: {
    addToBLogs: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
      setToLocal(state.blogs);
    },
    updateToBLogs: (state, action) => {
      state.blogs = state.blogs.map((blog) => blog.id === action.payload.id ? action.payload : blog);
      setToLocal(state.blogs);
    },
    removeBLogs: (state, action) => {

    },


  },



});


export const { addToBLogs, updateToBLogs, removeBLogs } = dailySlice.actions;