import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
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

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
