/** @format */

import { FAIL, LOADING, SUCCESS } from "./actiontype";

export const userRegister = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };
    case SUCCESS:
      return { loading: false, data: action.payload };
    case FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
