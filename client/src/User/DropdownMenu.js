import React from "react";
import { Link } from "react-router-dom";
import styles from "./DropdownMenu.module.css";
import {useDispatch} from 'react-redux';
import {sign_out} from '../actions';

//username dropdown-menu
export default function DropdownMenu(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Link to="/user/account">
        <button> account </button>
      </Link>
      <Link to="/">
        <button onClick={() => dispatch(sign_out()) }> log out </button>
      </Link>
    </div>
  );
}
