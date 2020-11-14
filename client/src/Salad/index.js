import React, { Component } from "react";
import { Container, Box, withStyles } from "@material-ui/core";
// components
import Navbar from "../components/Navbar";
import Product from "../components/product/Product";
import Scroll from "../components/Scroll";

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
class Salad extends Component {
  state = {
    open: false
  };
  handleOpenClose = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div>
        <Scroll showBelow={250} />
        <img
          src="../assets/img/salad.jpg"
          alt="salad"
          className={this.props.classes.img}
        ></img>
        <Container>
          <Box {...defaultProps} borderTop={0}>
            <Navbar></Navbar>
            <Box {...border} borderTop={1}>
              <h3>Salad</h3>
            </Box>
            <Product
              open={this.state.open}
              handleOpenClose={this.handleOpenClose}
            ></Product>
          </Box>
        </Container>
      </div>
    );
  }
}
export default withStyles(style)(Salad);
