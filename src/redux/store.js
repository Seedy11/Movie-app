/** @format */

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import movieSlide from "./moviestore/getMovieList";
import User from "./getUser";
import thunk from "redux-thunk";
import movieDisplay from "./moviestore/homeMovie";
import movieDisplayDetail from "./moviestore/movieDetail";

export const store = configureStore(
  {
    reducer: {
      movieDisplay: movieDisplay,
      movie: movieSlide,
      register: User,
      movieDetail: movieDisplayDetail,
    },
  },
  applyMiddleware(thunk)
);
