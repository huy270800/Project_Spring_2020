import React from "react";
import { useSelector } from "react-redux";

const totalPrice = (acc, curr) => acc + curr.price * curr.quantity;

const cartToString = cart => {
  let ret = "";
  for (let i = 0; i < cart.length; ++i) {
    ret += cart[i].quantity + ' ' + cart[i].size + ' ' + cart[i].name + ' (' + cart[i].toppings.toString() + '), ' + `price: ${cart[i].price * cart[i].quantity}` +'\n';
  }
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
