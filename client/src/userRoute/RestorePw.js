import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../constants.json";
import styles from "./User.module.css";

//reset a PW
export default function RestorePw(props) {
  //send new user to api
  const restorePw = (event) => {
    event.preventDefault();
    if (!event.target["email"].value) {
      alert("please enter an email!");
      return;
    }
    axios({
      method: "post",
      url: constants.baseAddress + "/users/restore",
      data: {
        email: event.target["email"].value
      }
    })
      .then((response) => {
        console.log("request successfully sent");
        props.history.push("/confirmEmail");
      })
      .catch((error) => {
        console.error(error);
        alert(" This email is not in use. ");
      });
  };

  return (
    <div className={styles.container}>
      <h2>Reset your password or retrieve account name</h2>
      <div className={styles.instruction}>
        Please enter your email.
        <br /> Your account name and a link to restore your PW will be send to
        your email.
      </div>
      <form onSubmit={restorePw}>
        <div>
          E-mail:
          <input className={styles.textfield} type="email" name="email" />
        </div>
        <div>
          Reset Password:
          <button className={styles.button} type="submit">
            Confirm
          </button>
        </div>
      </form>
      <div>
        You remember your account? &nbsp;
        <Link to="/user/login">
          <button className={styles.button}> log in </button>
        </Link>
      </div>
    </div>
  );
}
