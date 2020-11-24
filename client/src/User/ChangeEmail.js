import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import constants from "../constants.json";
import { useSelector } from "react-redux";
import { Container, Box, Grid, TextField, Button } from "@material-ui/core";
import Scroll from "../components/Scroll";

const defaultProps = {
  border: 1
};

export default function ChangeEmail(props) {
  let isLogged = useSelector((state) => state.isLogged);
  const changeEmail = (event) => {
    event.preventDefault();
    if (!event.target["email"].value) {
      alert("please enter an email address !");
      return;
    }
    if (event.target["password"].value !== isLogged.password) {
      alert("wrong password!");
      return;
    }
    axios({
      method: "put",
      url: constants.baseAddress + "/users/changeEmail",
      auth: {
        username: isLogged.username,
        password: isLogged.password
      },
      data: {
        email: event.target["email"].value
      }
    })
      .then((response) => {
        console.log("Email change successful.");
        props.history.push("/user/account");
      })
      .catch((error) => {
        console.error(error);
        alert("This email is already in use.");
      });
  };
  return (
    // <div className={styles.container}>
    //   <div className={styles.flex}>
    //     <h2>Change Email </h2>
    //     <Link className={styles.button2} to="/user/account">
    //       <button> close </button>
    //     </Link>
    //   </div>
    //   <form onSubmit={changeEmail}>
    //     <div>
    //       New Email:
    //       <input className={styles.textfield} type="email" name="email" />
    //     </div>
    //     <div>
    //       Your Password:
    //       <input className={styles.textfield} type="password" name="password" />
    //     </div>
    //     <div>
    //       Change email:
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
            <h2>Change Email</h2>
            <form onSubmit={changeEmail}>
              <Box p={6}>
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="email"
                    label="New email"
                    variant="outlined"
                    color="secondary"
                    name="email"
                  ></TextField>
                </Box>
                <Box style={{ marginBottom: "3vh" }}>
                  <TextField
                    fullWidth
                    type="password"
                    label="Your password"
                    variant="outlined"
                    color="secondary"
                    name="password"
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
