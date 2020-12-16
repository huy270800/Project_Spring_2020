import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clear_cart } from "../actions";
import { Container, Box, Button } from "@material-ui/core";

import axios from "axios";
import constants from "../constants.json";
import Scroll from "../components/Scroll.js";
import Navbar from "../components/Navbar.js";

/* Use this if cart.price has the complete price
const totalPrice = (acc, curr) => acc + curr.price * curr.quantity;
const cartToString = (cart) => {
  let ret = "";
  for (let i = 0; i < cart.length; ++i) {
    ret += cart[i].quantity + "x ";
    if (cart[i].size) ret += cart[i].size + " ";
    ret += cart[i].name + " ";
    if (cart[i].toppings) ret += "(" + cart[i].toppings.toString() + ") ";
    ret += `- ${cart[i].price * cart[i].quantity}€` + "; ";
  }
  ret += "Total price: " + cart.reduce(totalPrice, 0) + "€";
  return ret;
};*/
// Use this if cart.price has only the base price (without size and toppings)
const cartToString = (cart, tpgs) => {
  let ret = "";
  let finalPrice = 0;
  for (let i = 0; i < cart.length; ++i) {
    let calculatePrice = cart[i].price;
    ret += cart[i].quantity + "x ";
    if (cart[i].size){
      ret += cart[i].size + " ";
      //add size pricing
      if(cart[i].size === "Medium") calculatePrice = calculatePrice + 2;
      if(cart[i].size === "Large") calculatePrice = calculatePrice + 4;
    }
    ret += cart[i].name + " ";
    if (cart[i].toppings){
      ret += "(" + cart[i].toppings.toString() + ") ";
      //add topping pricing
      for(let j = 0; j < cart[i].toppings.length; ++j){
        let matchTopping = tpgs.find(t => t.name === cart[i].toppings[j]);
        calculatePrice += matchTopping.price;
      }
    }
    //prevent weird results
    calculatePrice = Math.round(calculatePrice*cart[i].quantity*100)/100
    ret += `- ${calculatePrice}€` + "; ";
    finalPrice += calculatePrice;
  }
  ret += "Total price: " + finalPrice + "€";
  return ret;
};

const defaultProps = {
  border: 1
};

const border = {
  p: 3
};

export default function Checkout(props) {
  let cart = useSelector((state) => state.cart);
  let isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  //post order to server
  const postOrder = (event) => {
    console.log("post: " + cart.cart);
    event.preventDefault();
    axios({
      method: "post",
      url: constants.baseAddress + "/orders",
      auth: {
        username: isLogged.username,
        password: isLogged.password
      },
      data: {
        detail: cartToString(cart.cart, props.toppings)
      }
    })
      .then((response) => {
        console.log("Post order worked.");
        dispatch(clear_cart());
        alert("Your order has been received.");
        props.history.push("/");
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Sorry.");
      });
  };

  return (
    <div>
      <Scroll showBelow={250} />
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <Box {...border} borderTop={1}>
            <Box textAlign="center">
              <h2>CONFIRMATION</h2>
            </Box>

            <h4>You have selected:</h4>
            <p>{cartToString(cart.cart, props.toppings)}</p>
            <Box textAlign="center">
              <Button onClick={postOrder}>confirm</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
