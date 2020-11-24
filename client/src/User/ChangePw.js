import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import constants from "../constants.json";
import { useSelector, useDispatch } from "react-redux";
import { sign_in } from "../actions";
import { Container, Box, Grid, TextField, Button } from "@material-ui/core";
import Scroll from "../components/Scroll";

const defaultProps = {
  border: 1
};

export default function ChangePw(props) {
  let isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const changePassword = (event) => {
    event.preventDefault();
    if (event.target["password"].value !== isLogged.password) {
      alert("wrong password!");
      return;
    }
    if (event.target["password2"].value !== event.target["password3"].value) {
      alert("new Passwords did not match!");
      return;
    }
    if (!event.target["password2"].value) {
      alert("Please enter a new password!");
      return;
    }
    axios({
      method: "put",
      url: constants.baseAddress + "/users/changePassword",
      auth: {
        username: isLogged.username,
        password: isLogged.password
      },
      data: {
        password: event.target["password2"].value
      }
    })
      .then((response) => {
        console.log("Password change successful.");
        dispatch(sign_in(isLogged.username, event.target["password2"].value));
        props.history.push("/user/account");
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong.");
      });
  };
  return (
    // <div className={styles.container}>
    //   <div className={styles.flex}>
    //     <h2>Change Password </h2>
    //     <Link className={styles.button2} to="/user/account">
    //       <button> close </button>
    //     </Link>
    //   </div>
    //   <form onSubmit={changePassword}>
    //     <div>
    //       Your old Password:
    //       <input className={styles.textfield} type="password" name="password" />
    //     </div>
    //     <div>
    //       Your new Password:
    //       <input
    //         className={styles.textfield}
    //         type="password"
    //         name="password2"
    //       />
    //     </div>
    //     <div>
    //       Repeat new Password:
    //       <input
    //         className={styles.textfield}
    //         type="password"
    //         name="password3"
    //       />
    //     </div>
    //     <div>
    //       Change password:
    //       <button className={styles.button} type="submit">
    //         confirm
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <Container>
      <Scroll showBelow={250}></Scroll>
      <Box {...defaultProps} borderTop={0} textAlign="center">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <img
              src="../assets/img/login.jpg"
              alt="login img"
              style={{ maxWidth: "100%" }}
            ></img>
          </Grid>
          <Grid item xs={6}>
            <h2>Change Password</h2>
            <form onSubmit={changePassword}>
              <Box p={6}>
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Your old password"
                    variant="outlined"
                    color="secondary"
                    name="password"
                  ></TextField>
                </Box>
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Your new password"
                    variant="outlined"
                    color="secondary"
                    name="password2"
                  ></TextField>
                </Box>
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Repeat new password"
                    variant="outlined"
                    color="secondary"
                    name="password3"
                  ></TextField>
                </Box>
              </Box>
              <Button>
                <Link to="/user/account"> Back</Link>
              </Button>
              <Button type="submit">Confirm</Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
