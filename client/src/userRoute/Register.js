import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../constants.json";
import { Container, Box, Grid, TextField, Button } from "@material-ui/core";

const defaultProps = {
  border: 1
};

//register form
export default function Login(props) {
  //send new user to api
  const registerUser = (event) => {
    event.preventDefault();
    if (!event.target["username"].value) {
      alert("please enter a username!");
      return;
    }
    if (!event.target["email"].value) {
      alert("please enter an email!");
      return;
    }
    if (!event.target["password"].value) {
      alert("please enter a password!");
      return;
    }
    if (event.target["password"].value !== event.target["password2"].value) {
      alert("passwords did not match!");
      return;
    }
    axios({
      method: "post",
      url: constants.baseAddress + "/users",
      data: {
        username: event.target["username"].value,
        email: event.target["email"].value,
        password: event.target["password"].value
      }
    })
      .then((response) => {
        console.log("create user successful.");
        props.history.push("/confirmEmail");
      })
      .catch((error) => {
        console.error(error);
        alert(" This user already exists. ");
      });
  };

  return (
    <Container>
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
            <h2>Welcome to the Pizza Palace!</h2>
            <form onSubmit={registerUser}>
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
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    name="email"
                  ></TextField>
                </Box>
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    variant="outlined"
                    color="secondary"
                    name="password"
                  ></TextField>
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    type="password"
                    label="Repeat password"
                    variant="outlined"
                    color="secondary"
                    name="password2"
                  ></TextField>
                </Box>
              </Box>
              <Button type="submit">Register</Button>
            </form>
            <Box style={{ marginTop: "30vh" }}>
              <div>
                You already have an account? &nbsp;
                <Link to="/user/login">
                  <Button> login </Button>
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
