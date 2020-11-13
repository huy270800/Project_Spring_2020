import React from "react";
import { Container, Box, Typography, makeStyles } from "@material-ui/core";
// components
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Scroll from "../components/Scroll";

const defaultProps = {
  border: 1
};

const border = {
  p: 3
};

const useStyles = makeStyles((theme) => ({
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function Salad() {
  const classes = useStyles();
  return (
    <div>
      <Scroll showBelow={250} />
      <img
        src="../assets/img/salad.jpg"
        alt="salad"
        className={classes.img}
      ></img>
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <Box {...border} borderTop={1}>
            <Typography>Salad</Typography>
          </Box>
          <Product></Product>
        </Box>
      </Container>
    </div>
  );
}
