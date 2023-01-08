import { useState } from "react";
import IconsSVG from "../../image/symbol-defs.svg";
import styles from "./UserItem.module.css";
export const UserItem = ({ id, name, nick, phone, mail, site, company }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className={styles.item} onClick={handleClick}>
        {open ? (
          <svg height="25px" width="25px">
            <use xlinkHref={`${IconsSVG}#icon-folder-open`} />
          </svg>
        ) : (
          <svg height="25px" width="25px">
            <use xlinkHref={`${IconsSVG}#icon-folder`} />
          </svg>
        )}

        <span className={styles.itemText}>{name}</span>
      </button>
      {open ? (
        <li className={styles.card} key={id}>
          <p>userName : {nick}</p>
          <p>tel : {phone}</p>
          <p>email : {mail}</p>
          <p>webcite : {site}</p>
          <p>work company: {company}</p>
        </li>
      ) : (
        <></>
      )}
    </>
  );
};
