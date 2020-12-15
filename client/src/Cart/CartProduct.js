import React from "react";
import { Grid, Button, Box } from "@material-ui/core";

export default function CartProduct(props) {
  const { img, size, name, price, quantity, toppings } = props.cart;
  const checkSize = (string) => {
    if (string === "Small") {
      return <> Small </>;
    } else if (string == "Medium") {
      return <> Medium (+ 2€)</>;
    } else return <>Large (+ 4€)</>;
  };
  const handleDeleteCart = () => {
    if (window.confirm("Are you sure?")) {
      props.deleteCart(props.cart.id_cart);
    }
  };
  const handleChangeQuantity = (event) => {
    if (Number(event.target.value) === 0) {
      return props.deleteCart(props.cart.id_cart);
    }
    props.updateCart(props.cart.id_cart, event.target.value);
  };
  const handleDecreaseQuantity = () => {
    props.decrease(props.cart.id_cart);
  };
  const handleIncreaseQuantity = () => {
    props.increase(props.cart.id_cart);
  };
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
                <h4>Name: {name} </h4>
                <p>Size: {checkSize(size)}</p>
               {/* <p>Your toppings:  {toppings.toString()} </p> */}
              </Grid>
              <Grid item>
                <Button
                  onChange={handleChangeQuantity}
                  onClick={handleDecreaseQuantity}
                >
                  -
                </Button>
                {quantity}
                <Button onClick={handleIncreaseQuantity}>+</Button>
              </Grid>
              <Grid item>
                <p>€{price * quantity}</p>
              </Grid>
              <Grid item>
                <Button onClick={handleDeleteCart}>Delete</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
