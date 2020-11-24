import React from "react";
import { Container, Box, makeStyles } from "@material-ui/core";

// components
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import SaladList from "./SaladList";

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
function Salad(props) {
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
            <h3>Salad</h3>
          </Box>
          <SaladList salads={props.salads}></SaladList>
        </Box>
      </Container>
    </div>
  );
}
export default Salad;
