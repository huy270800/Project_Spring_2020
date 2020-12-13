import React from "react";
import { useSelector } from "react-redux";

const totalPrice = (acc, curr) => acc + curr.price * curr.quantity;

const cartToString = cart => {
  let ret = "";
  for (let i = 0; i < cart.length; ++i) {
    ret += cart[i].quantity + ' ';
    if(cart[i].size) ret += cart[i].size + ' ';
    ret += cart[i].name + ' ';
    if(cart[i].toppings) ret += '(' + cart[i].toppings.toString() + '); '
    ret += `price: ${cart[i].price * cart[i].quantity}€` +'\n';
  }
  ret += "total price: " + cart.reduce(totalPrice,0) + '€';
  return ret;
}

export default function Checkout() {
  let cart = useSelector((state) => state.cart);
  return <div>
    <button onClick={()=>console.log(cart.cart)} >log cart</button>
    <button onClick={()=>console.log(cart.cart.reduce(totalPrice,0))} >log total price</button>
    <button onClick={()=>console.log( cartToString(cart.cart)) } >log cart to string</button>

  </div>;
}
