/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FAIL, LOADING, SUCCESS } from "./actiontype";

export const movieSlide = createSlice({
  name: "movie",
  initialState: {},
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const getMovie = (movieSearch) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const data = await axios.get(
      `http://www.omdbapi.com/?s='${movieSearch}'&apikey=f1aa2fec&`
    );
    dispatch({
      type: SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response,
    });
  }
};

console.log("apitesting", getMovie("black panther "));
// export const fetchImageList = () => {
// 	return (dispatch) => {
// 		dispatch(movieSlide);
// 		axios.get("http://www.omdbapi.com/?t='friday'&apikey=f1aa2fec&").then((res) => {
// 			let _list = res.data;
// 			dispatch(movieSlide(_list));
// 		});
// 	};
// };
// console.log('terstf', fetchImageList());
export const selectedMovie = (state) => state.selectedMovie.movie;
export const { postAdded } = movieSlide.actions;
export default movieSlide.reducer;
