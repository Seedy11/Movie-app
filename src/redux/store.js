/** @format */

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import movieSlide from "./moviestore/getMovieList";
import User from "./getUser";
import thunk from "redux-thunk";
import { userRegister } from "./moviestore/userReducer";

export const store = configureStore(
  {
    reducer: { movie: userRegister, register: User },
  },
  applyMiddleware(thunk)
);
