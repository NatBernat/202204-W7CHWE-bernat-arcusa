import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
  },
});

export const usersReducer = userSlice.reducer;

export const { logIn: logInActionCreator } = userSlice.actions;
