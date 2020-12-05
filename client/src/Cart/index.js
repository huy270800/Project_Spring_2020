import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Scroll from "../components/Scroll";
import { Container, Box, Grid, Button, makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import CartProduct from "./CartProduct";
import { updateCart, deleteCart } from "../actions/index";

const defaultProps = {
  border: 1
};

const border = {
  p: 3
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

function Cart(props) {
  const classes = useStyles();
  const total = props.cart_data.cart.reduce((total, pic) => {
    return (total = total + +pic.quantity * pic.price);
  }, 0);
  return (
    <div>
      <Scroll showBelow={250}></Scroll>
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <Box {...border} borderTop={1}>
            <h3>Product</h3>
            {props.cart_data.cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <Box>
                {props.cart_data.cart.map((cart_item) => {
                  return (
                    <Box m={3}>
                      <CartProduct
                        updateCart={props.updateCart}
                        deleteCart={props.deleteCart}
                        cart={cart_item}
                        key={cart_item.id}
                      ></CartProduct>
                    </Box>
                  );
                })}
                <Box m={3}>
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item className={classes.margin}>
                      <h2>Total: </h2>
                    </Grid>
                    <Grid item className={classes.margin}>
                      <h2>€ {total}</h2>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justify="flex-end">
                    <Button
                      variant="outlined"
                      size="medium"
                      className={classes.margin}
                    >
                      <Link to="/">Continue shopping</Link>
                    </Button>
                    <Button
                      variant="outlined"
                      size="medium"
                      className={classes.margin}
                    >
                      <Link to="/checkout"> Check out</Link>
                    </Button>
                  </Grid>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart_data: state.cart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (id_cart, value) => {
      dispatch(updateCart(id_cart, value));
    },
    deleteCart: (id_cart) => {
      dispatch(deleteCart(id_cart));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
