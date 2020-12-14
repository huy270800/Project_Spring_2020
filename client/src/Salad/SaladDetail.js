import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Button,
  Container,
  Grid,
  Typography,
  Box,
  TextField
} from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { connect } from "react-redux";
import topping from "../Pizza/Toppings.json";
import * as constant from "../constants.json"
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import Topping from "../components/product/Topping.js";
import Size from "../components/product/Size.js";
import ProductDetail from "../components/product/ProductDetail";


var chooseTop = [];



const style = (theme) => ({
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

class SaladDetail extends Component {
  state = {
    topping: topping.topping,
    selected_size: "",
    selected_topping: [],
    quantity: 1,
    open: false
  };

  componentDidMount() {
    axios
      .get(constant.baseAddress + `/salads/${this.props.match.params.id}`)
      .then((res) => {
        console.log(this.props);
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
  buttonOnClick = () => {
    this.props.handleClickOpen();
    this.handleAddToCart();
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
  };s
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
export default connect(null,mapDispatchToProps)(withRouter(withStyles(style)(SaladDetail)));
