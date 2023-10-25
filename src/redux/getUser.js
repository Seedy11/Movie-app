/** @format */

import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  user: [{}],
};

export const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    addedUser: (state, action) => {
      return {
        ...state,
        user: [...action.payload],
      };
    },
  },
});
console.log("redux", User);

export const { addedUser } = User.actions;
export default User.reducer;
