import React from "react";
import { Container, Box, makeStyles } from "@material-ui/core";

// components
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import DrinkList from "./DrinkList";

const defaultProps = {
  border: 1
};

const border = {
  p: 3
};

const useStyles = makeStyles({
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});
function Drink(props) {
  const classes = useStyles();
  return (
    <div>
      <Scroll showBelow={250} />
      <img
        src="../assets/img/drinks.jpg"
        alt="drink"
        className={classes.img}
      ></img>
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <Box {...border} borderTop={1}>
            <h2>Beverages</h2>
          </Box>
          <DrinkList beverages={props.beverages}></DrinkList>
        </Box>
      </Container>
    </div>
  );
}
export default Drink;
