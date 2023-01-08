import "./App.css";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/users/users-operations";
import { Users } from "./components/Users/UsersList";
import { useEffect } from "react";
import { Timer } from "./components/Timer/Timer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUsers));
  return (
    <>
      <Timer />
      <Users />
    </>
  );
}

export default App;
