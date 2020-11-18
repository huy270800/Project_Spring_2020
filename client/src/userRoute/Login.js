import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../constants.json";
import { Container, Box, TextField, Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { sign_in } from "../actions";
import Scroll from "../components/Scroll";

const defaultProps = {
  border: 1
};

//log in form
export default function Login(props) {
  const dispatch = useDispatch();

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
        dispatch(
          sign_in(
            event.target["username"].value,
            event.target["password"].value
          )
        );
        props.history.push("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Wrong username or password. Log in failed.");
      });
  };

  return (
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
            <h3>Welcome to the Pizza Palace!</h3>
            <form onSubmit={authUser}>
              <Box p={6}>
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Username"
                    variant="outlined"
                    color="secondary"
                    name="username"
                  ></TextField>
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    variant="outlined"
                    color="secondary"
                    name="password"
                  ></TextField>
                </Box>
              </Box>
              <Button type="submit">Login</Button>
            </form>
            <Box style={{ marginTop: "30vh" }}>
              <div>
                You do not have an account? &nbsp;
                <Link to="/user/register">
                  <Button> create account </Button>
                </Link>
              </div>
              <div>
                You forgot your account? &nbsp;
                <Link to="/user/restorePw">
                  <Button> reset password </Button>
                </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
