import React from "react";
import { Grid, Button, TextField, Box } from "@material-ui/core";
import {connect} from "react-redux"
// import { decrease } from "../actions";

import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, removeAllQuantity,deleteCart } from '../features/cart/cartSlice';

const CartProduct = (props) =>  {

  const dispatch = useDispatch();
  const cart_data = useSelector(
   (state) => state.cart
 )

 console.log(cart_data.cart)

  const { img, size, name, price, quantity, id_product } = props.cart;

  const handleDeleteCart = () => {
    // if (window.confirm("Are you sure?")) {
    //   props.deleteCart(props.cart.id_cart);
    // }
    if (window.confirm("Are you sure ? ")){
      console.log(dispatch(deleteCart()))
    } 
  };

  const handleChangeQuantity = (event) => {
    if (Number(event.target.value) === 0) {
      return props.deleteCart(props.cart.id_cart);
    }
    props.updateCart(props.cart.id_cart, event.target.value);
  };
  // const increase = () => {
  //   console.log("adasdasdasd")
  // }
  // const decrease = () => {
  //   console.log("adasdasasdasssssssssssssssss")
  // }
  return (
    <Box>
      <Box marginTop={5} marginBottom={5}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={3}>
            <img style={{ maxWidth: "90%" }} src={img} alt="product img"></img>
          </Grid>
          <Grid item md={9}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item md={6}>
                <h4>{name} </h4>
                <p>Size - {size} </p>
                <p>Topping</p>
              </Grid>
              <Grid item>
                <div >
                  {console.log(props.cart)}
                  <button onClick={() => dispatch(removeAllQuantity({ productId: id_product }))}>Remove quantity</button>
                  <button  onClick={() => dispatch(decrease({ productId: id_product }))}>-</button>
                  {quantity} 
                  <button onClick={() => dispatch(increase({ productId: id_product }))}>+</button>
                </div>
                {/* <TextField
                  type="number"
                  value={quantity}
                  onChange={handleChangeQuantity}
                ></TextField> */}
              </Grid>
              <Grid item>
                <p>€{price * quantity}</p>
              </Grid>
              <Grid item>
                {/* <Button onClick={(handleDeleteCart)}>Delete</Button> */}
            <Button onClick={() => dispatch(deleteCart({productId: id_cart}))}>Delete</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

  // const mapDispatchToProps = (dispatch,ownProps) => {
  //   console.log(ownProps.cart); 
  //   return{
  //     increase: () => dispatch( {type: "INCREASE", payload: {id:1}}),
  //     decrease: () => dispatch( {type: "DECREASE", payload: {id:1}})
  //   }
  // }
// export default connect(null,mapDispatchToProps)(CartProduct);

export default CartProduct;