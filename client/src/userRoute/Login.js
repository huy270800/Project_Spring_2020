import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../constants.json";
import styles from "./User.module.css";

//log in form
export default function Login(props) {
  //auth user before log in
  const authUser = (event) => {
    event.preventDefault();
    if (!event.target["username"].value) {
      alert("please enter a username!");
      return;
    }
    if (!event.target["password"].value) {
      alert("please enter a password!");
      return;
    }
    axios({
      method: "post",
      url: constants.baseAddress + "/login",
      auth: {
        username: event.target["username"].value,
        password: event.target["password"].value
      }
    })
      .then((response) => {
        console.log("Log in successful.");
        props.setUsername(event.target["username"].value);
        props.setPassword(event.target["password"].value);
        props.history.push("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Wrong username or password. Log in failed.");
      });
  };

  return (
    <div className={styles.container}>
      <h2>Welcome to the Pizza Palace!</h2>
      <form onSubmit={authUser}>
        <div>
          Username:
          <input className={styles.textfield} type="text" name="username" />
        </div>
        <div>
          Password:
          <input className={styles.textfield} type="password" name="password" />
        </div>
        <div>
          Log in:
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>
      <div>
        You don't have an account? &nbsp;
        <Link to="/user/register">
          <button className={styles.button}> create account </button>
        </Link>
      </div>
      <div>
        You forgot your account? &nbsp;
        <Link to="/user/restorePw">
          <button className={styles.button}> reset password </button>
        </Link>
      </div>
    </div>
  );
}
