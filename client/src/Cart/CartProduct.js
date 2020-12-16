import React from "react";
import { Grid, Button, Box } from "@material-ui/core";

export default function CartProduct(props) {
  const {
    img,
    size,
    name,
    quantity,
    toppings,
    id_cart,
    id_product,
    totalPrice
  } = props.cart;
  const checkSize = (string) => {
    if (id_product < 41 || id_product > 53) {
      if (string === "Small") {
        return <> Small </>;
      } else if (string === "Medium") {
        return <> Medium (+ 2€)</>;
      } else return <>Large (+ 4€)</>;
    }
  };
  const handleDeleteCart = () => {
    if (window.confirm("Are you sure?")) {
      props.deleteCart(id_cart);
    }
  };
  const handleChangeQuantity = (event) => {
    if (Number(event.target.value) === 0) {
      return props.deleteCart(id_cart);
    }
    props.updateCart(id_cart, event.target.value);
  };
  const handleDecreaseQuantity = () => {
    props.decrease(id_cart);
  };
  const handleIncreaseQuantity = () => {
    props.increase(id_cart);
  };
  const availableTopping = (array) => {
    var a;
    if (
      typeof array != "undefined" &&
      array != null &&
      array.length != null &&
      array.length > 0
    )
      a = true;
    else a = false;
    return a;
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
                <h4> {name} </h4>
                <p>{checkSize(size)}</p>
                {availableTopping(toppings) === true ? (
                  <p>{toppings.join(",")}</p>
                ) : (
                  <p></p>
                )}
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
                <p>€{totalPrice * quantity}</p>
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
