import React from "react";
import { Link } from "react-router-dom";
import styles from "./DropdownMenu.module.css";
import { useDispatch } from "react-redux";
import { sign_out } from "../actions";

//username dropdown-menu
export default function DropdownMenu(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.dropdown}>
      <button className={styles.sdropbtn}>Dropdown</button>
      <div className={styles.dropdownContent}>
        <Link to="/user/account">Account</Link>
        <Link to="/user/history">History</Link>
        <Link to="/" onClick={() => dispatch(sign_out())}>
          Log out
        </Link>
      </div>
    </div>
  );
}
