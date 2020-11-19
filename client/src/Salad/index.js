import React, { Component } from "react";
import { Container, Box, withStyles } from "@material-ui/core";
// components
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import Axios from "axios";
import ProductList from "../components/product/ProductList";

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
    open: false,
    isLoading: false,
    salad: []
  };
  componentDidMount() {
    Axios.get("")
      .then((res) => {
        this.setState({ salad: res.salad });
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
            <ProductList
              open={this.state.open}
              handleOpenClose={this.handleOpenClose}
              salad={this.state.salad}
              isLoading={this.state.isLoading}
            ></ProductList>
          </Box>
        </Container>
      </div>
    );
  }
}
export default withStyles(style)(Salad);
