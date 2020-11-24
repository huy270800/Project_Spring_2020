import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../constants.json";
import { Box, Grid, Container, TextField, Button } from "@material-ui/core";
import Scroll from "../components/Scroll";

const defaultProps = {
  border: 1
};

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
            <h3>Reset your password or retrieve account name</h3>
            <p>
              Your account name and a link to restore your PW will be send to
              your email!
            </p>
            <form onSubmit={restorePw}>
              <Box p={6}>
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    name="email"
                  ></TextField>
                </Box>
              </Box>
              <Button type="submit">reset password</Button>
            </form>
            <Box style={{ marginTop: "30vh" }}>
              <div>
                You remember your account? &nbsp;
                <Link to="/user/login">
                  <Button> log in </Button>
                </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
