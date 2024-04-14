/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieStore = createAsyncThunk(
  "movie/data",
  async (name, thunkAPI) => {
    try {
      const data = await axios.get(
        `https://www.omdbapi.com/?s='${name}'&apikey=f1aa2fec&`
      );

      return data.data.Search;
    } catch (error) {
      return thunkAPI.rejectWithValue("wrong info ");
    }
  }
);
const initialState = {
  movieItems: [],
};
export const movieSlide = createSlice({
  name: "movie",
  initialState,
  status: "fulfilled",
  reducers: {
    movieAdded: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieStore.pending, (state) => {
        state.status = "idle";
      })
      .addCase(movieStore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieItems = action.payload;
      })
      .addCase(movieStore.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
      });
  },
});

export const { movieAdded } = movieSlide.actions;
export default movieSlide.reducer;
