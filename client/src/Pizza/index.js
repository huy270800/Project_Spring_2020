import React, { Component } from "react";
import { Container, Box, withStyles } from "@material-ui/core";
import axios from "axios";
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
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
class Pizza extends Component {
  state = {
    open: false,
    isLoading: false,
    products: []
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://pizzapalaceapi26071990.herokuapp.com/products/pizzas")
      .then((res) => {
        this.setState({ products: res.data, isLoading: false });
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
              products={this.state.products}
              isLoading={this.state.isLoading}
            ></ProductList>
          </Box>
        </Container>
      </div>
    );
  }
}
export default withStyles(style)(Pizza);
