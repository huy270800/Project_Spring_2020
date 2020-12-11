import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Container,
  Grid,
  Typography,
  Box,
  TextField
} from "@material-ui/core";

import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import Topping from "../components/product/Topping.js";
import Size from "../components/product/Size.js";
import AddToCart from "../components/product/AddToCart";
import ProductDetail from "../components/product/ProductDetail";
import * as constant from "./constants.json"
var chooseTop = [];

const styles = (theme) => ({
  pad: {
    padding: "16px 24px"
  },
  pic: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "block"
  }
});

const border = {
  p: 3
};

class PizzaDetail extends Component {
  state = {
    selected_size: "",
    selected_topping: [],
    quantity: 1,
    open: false
  };

  componentDidMount() {
    axios
      .get( constant.baseAddress + `/pizzas/${this.props.match.params.id}`)
      .then((res) => {
        const { id, name, price, size, img, description } = res.data;
        this.setState({
          id,
          name,
          price,
          size,
          img,
          description
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeSize = (event) => {
    this.setState({ selected_size: event.target.value });
  };

  chooseTopping = (event) => {
    if (!chooseTop.includes(event.target.value)) {
      chooseTop.push(event.target.value);
    } else {
      chooseTop.splice(chooseTop.indexOf(event.target.value), 1);
    }
    this.setState({ selected_topping: chooseTop });
  };

  handleAddToCart = () => {
    const {
      id,
      name,
      price,
      selected_size,
      selected_topping,
      quantity,
      img
    } = this.state;
    this.props.addToCart({
      id_cart: "cart_" + Date.now() + Math.random(),
      id_product: id,
      name,
      price,
      img,
      size: selected_size,
      quantity,
      toppings: selected_topping
    });
  };

  buttonOnClick = () => {
    this.props.handleClickOpen();
    this.handleAddToCart();
  };

  render() {
    return (
      <div>
        <Scroll showBelow={250} />
        <Container>
          <Box borderBottom={1}>
            <Navbar></Navbar>
            <ProductDetail
              img={this.state.img}
              price={this.state.price}
              name={this.state.name}
              description={this.state.description}
              size={this.state.size}
              selected_size={this.state.selected_size}
              changeSize={this.changeSize}
              topping={this.props.topping}
              chooseTopping={this.chooseTopping}
              open={this.props.open}
              buttonOnClick={this.buttonOnClick}
              handleClose={this.props.handleClose}
            ></ProductDetail>
          </Box>
        </Container>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(PizzaDetail)));
