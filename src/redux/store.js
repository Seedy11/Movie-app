/** @format */

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import movieSlide from "./moviestore/getMovieList";
import User from "./getUser";
import thunk from "redux-thunk";
import movieDisplay from "./moviestore/HomeMovie";

export const store = configureStore(
  {
    reducer: { homeMovie: movieDisplay, movie: movieSlide, register: User },
  },
  applyMiddleware(thunk)
);
