import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchUsers } from "../../API";

export const getUsers = createAsyncThunk("users", async () => {
  let { data } = await fetchUsers();

  return data;
});
