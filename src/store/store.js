import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../redux/features/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
