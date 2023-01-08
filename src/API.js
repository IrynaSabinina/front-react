import axios from "axios";

const BASE_URL = "http://localhost:8009";
const API = axios.create(
  { baseURL: BASE_URL },
  {
    mode: "no-cors",
    credentials: "include",
    method: "GET",
  }
);

export const fetchUsers = () => {
  const data = API.get("/users");
 
  return data;
};
