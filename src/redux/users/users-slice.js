import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./users-operations";
import { usersInitialState } from "./users-initialState";

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,

  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      state = payload;
    },
  },
});
export const usersReducer = usersSlice.reducer;
