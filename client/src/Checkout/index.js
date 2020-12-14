import React from "react";
import { useSelector } from "react-redux";
import { Container, Box, Button } from "@material-ui/core";

import axios from "axios";
import constants from "../constants.json";
import Scroll from "../components/Scroll.js";
import Navbar from "../components/Navbar.js";

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
        detail: cartToString(cart.cart)
      }
    })
      .then((response) => {
        console.log("Post order worked.");
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
            <p>{cartToString(cart.cart)}</p>
            <Box textAlign="center">
              <Button onClick={postOrder}>confirm</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
