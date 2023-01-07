import axios from "axios";
export const API = axios.create({
  baseURL: "http://localhost:4200/",
});

// export const tokenAuth = {
//   set(token) {
//     API.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   unset() {
//     API.defaults.headers.common.Authorization = ``;
//   },
// };
