import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../constants.json";
import styles from "./User.module.css";
import {useSelector} from 'react-redux';

export default function Account(props) {
  let isLogged = useSelector(state => state.isLogged);
  const [userEmail, setUserEmail] = useState(null);
  
  //get email for logged in user
  useEffect(() => {
    axios({
      method: "get",
      url: constants.baseAddress + "/users/email",
      params: {
        username: isLogged.username
      }
    })
      .then((response) => {
        setUserEmail(response.data);
        console.log("Got email: " + response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong :(");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <h2> {isLogged.username} </h2>
        <Link className={styles.button2} to="/">
          <button> close </button>
        </Link>
      </div>
      <div> Email: {userEmail} </div>
      <div className={styles.flex}>
        <Link to="/user/changeEmail">
          <button> change email </button>
        </Link>
        <Link to="/user/changePw">
          <button> change password </button>
        </Link>
      </div>
    </div>
  );
}
