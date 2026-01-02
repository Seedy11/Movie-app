/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieHomeStore = createAsyncThunk(
  "homeMovie/data",
  async (thunkAPI) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "5" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTk4N2VhYWE1YTYwNmUwMmUwM2Y2Yzc5MmYyYzcwOSIsIm5iZiI6MTczNDI4MDcyNi4wMzAwMDAyLCJzdWIiOiI2NzVmMDYxNmU4YTY0YWQ3N2Q3NjRhZmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._FR3g9PF5KcH3iuD-ku8VAZU_r9JBm2Z37nhbNQ-Q0k",
      },
    };
    try {
      const data = await axios.request(options);

      return data.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue("wrong info ");
    }
  }
);
const initialState = {
  homeItems: [],
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
        state.homeItems = action.payload;
      })
      .addCase(movieHomeStore.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
      });
  },
});

export const { movieDisplay } = movieHomeSlide.actions;
export default movieHomeSlide.reducer;
