import React, { Component } from "react";
import { Container, Box, withStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import PizzaList from "./PizzaList";

const defaultProps = {
  border: 1
};

const border = {
  p: 3
};

const style = (theme) => ({
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});
class Pizza extends Component {
  render() {
    return (
      <div>
        <Scroll showBelow={250} />
        <img
          src="../assets/img/pizza.jpg"
          alt="pizza"
          className={this.props.classes.img}
        ></img>
        <Container>
          <Box {...defaultProps} borderTop={0}>
            <Navbar></Navbar>
            <Box {...border} borderTop={1}>
              <h2>Pizza</h2>
            </Box>
            <PizzaList pizzas={this.props.pizzas}></PizzaList>
          </Box>
        </Container>
      </div>
    );
  }
}
export default withStyles(style)(Pizza);
