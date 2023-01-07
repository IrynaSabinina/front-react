import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../API";

export const getUsers = createAsyncThunk("users", async () => {
  const { data } = await API.get("users");
  console.log(data);
  return data;
});
getUsers();
