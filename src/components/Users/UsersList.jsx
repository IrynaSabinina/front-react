import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/users/users-operations";
import { usersSelector } from "../../redux/users/users-selector";
import { UserItem } from "../UserItem/UserItem";
import styles from "./UserList.module.css";
export const Users = () => {
  const users = useSelector(usersSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.list}>
        {users.map(({ id, name, username, phone, email, website, company }) => {
          return (
            <UserItem
              key={id}
              id={id}
              name={name}
              nick={username}
              phone={phone}
              mail={email}
              site={website}
              company={company}
            />
          );
        })}
      </ul>
    </>
  );
};
