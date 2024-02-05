/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieHomeStore = createAsyncThunk(
  "homeMovie/data",
  async (thunkAPI) => {
    try {
      const data = await axios.get(
        `https://www.omdbapi.com/?s='rocky'&apikey=f1aa2fec&`
      );

      return data.data.Search;
    } catch (error) {
      return thunkAPI.rejectWithValue("wrong info ");
    }
  }
);
const initialState = {
  movieItems: [{}],
};
export const movieHomeSlide = createSlice({
  name: "movie",
  initialState,
  status: "fulfilled",
  reducers: {
    movieDisplay: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieHomeStore.pending, (state) => {
        state.status = "idle";
      })
      .addCase(movieHomeStore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieItems = action.payload;
      })
      .addCase(movieHomeStore.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
      });
  },
});

export const { movieDisplay } = movieHomeSlide.actions;
export default movieHomeSlide.reducer;
