import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import constants from "../constants.json";

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
  ret += "total price: " + cart.reduce(totalPrice, 0) + "€";
  return ret;
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
      <div>You have selected:</div>
      <div>{cartToString(cart.cart)}</div>
      <div>
        If this is correct: &nbsp;
        <button onClick={postOrder}>post order</button>
      </div>
    </div>
  );
}
