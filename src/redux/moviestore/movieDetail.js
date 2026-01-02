/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const movieDetail = createAsyncThunk(
  "homeMovie/data",
  async (movieId, thunkAPI) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { language: "en-US", page: "5" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTk4N2VhYWE1YTYwNmUwMmUwM2Y2Yzc5MmYyYzcwOSIsIm5iZiI6MTczNDI4MDcyNi4wMzAwMDAyLCJzdWIiOiI2NzVmMDYxNmU4YTY0YWQ3N2Q3NjRhZmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._FR3g9PF5KcH3iuD-ku8VAZU_r9JBm2Z37nhbNQ-Q0k",
      },
    };
    try {
      const data = await axios.request(options);
      console.log("reduxtest", data.data.id);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("wrong info ");
    }
  }
);
const initialState = {
  movieInfo: null,
  status: "idle",
};
export const movieDetailSlide = createSlice({
  name: "movie",
  initialState,
  status: "fulfilled",
  reducers: {
    movieDisplayDetail: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieDetail.pending, (state) => {
        state.status = "idle";
      })
      .addCase(movieDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieInfo = action.payload;
      })
      .addCase(movieDetail.rejected, (state, action) => {
        console.log(action);
        state.status = "failed";
      });
  },
});

export const { movieDisplayDetail } = movieDetailSlide.actions;
export default movieDetailSlide.reducer;
