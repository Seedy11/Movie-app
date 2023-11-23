/** @format */

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import movieSlide from "./moviestore/getMovieList";
import User from "./getUser";
import thunk from "redux-thunk";

export const store = configureStore(
  {
    reducer: { movie: movieSlide, register: User },
  },
  applyMiddleware(thunk)
);
