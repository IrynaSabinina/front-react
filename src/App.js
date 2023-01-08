import "./App.css";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/users/users-operations";
import { Users } from "./components/Users/UsersList";
import { useEffect } from "react";

import { Header } from "./components/Header/Header";
function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers));
  return (
    <>
      <Header />
      <Users />
    </>
  );
}

export default App;
