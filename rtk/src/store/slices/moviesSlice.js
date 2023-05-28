import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      // console.log(action.payload);
      // console.log(state);
      const indexToRemove = state.indexOf(action.payload);
      // console.log(indexToRemove);
      state.splice(indexToRemove, 1);
    },
  },
  extraReducers(builder) {
    // add an extra case to look for the app/reset action type, which can be dynamically identified with reset
    builder.addCase(reset, (state, action) => {
      // console.log(state.length, action);
      return [];
      // console.log(state.length);
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
