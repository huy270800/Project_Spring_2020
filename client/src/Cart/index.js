import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Scroll from "../components/Scroll";
import { Container, Box, Grid, Button, makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import CartProduct from "./CartProduct";
import { updateCart, deleteCart, increase, decrease } from "../actions/index";

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
  let sizePrice; 
  let toppingChosen = [];
  let toppingsPrices = 0;
  let saladsPrice = 0;
  let saladsArray = [];
  let drinksArray = [];
  let drinksPrice = 0;
      function checkSize(pic){
        if (pic.size === "Small"){    
          sizePrice = 0 ;
       }
        else if (pic.size === "Medium"){
          sizePrice = 2 ;
        }
        else {
          sizePrice = 4 
        }
      }
      function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
  props.cart_data.cart.map((pic) => {
      if (pic.hasOwnProperty("toppings") && pic.hasOwnProperty("size"))
      {
        console.log()
          checkSize(pic)
          props.topping.map((product) => {
            pic.toppings.map((topping) => {
              if (product.name == topping) {
                toppingChosen.push(product);
                toppingsPrices = toppingChosen.reduce((prev,curr) => {
                  return prev + curr.price
              },0)
              }
            })
          })
        
      }
      else if (pic.hasOwnProperty('size')){ 
          console.log(pic)
        checkSize(pic)
        toppingsPrices = 0 ;
      saladsArray.push(pic)
      saladsPrice = saladsArray.reduce((prev,curr) => {
        return prev + curr.price * curr.quantity + sizePrice * curr.quantity
    },0)
      }
      else {
          drinksArray.push(pic)
          
          drinksPrice = drinksArray.reduce((prev,curr) => {
            return prev + curr.price * curr.quantity
        },0)
        
      }
  })
  console.log(toppingsPrices)
  console.log(drinksPrice)
  console.log(saladsPrice)
  const classes = useStyles();
  const total = props.cart_data.cart.reduce((total, pic) => {
    return (total = total + pic.quantity * pic.price + sizePrice * pic.quantity + toppingsPrices * pic.quantity );
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
                        increase={props.increase}
                        decrease={props.decrease}
                        topping={props.topping}
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
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                  >
                    <Button
                      variant="outlined"
                      size="medium"
                      className={classes.margin}
                    >
                      <Link to="/">Continue shopping</Link>
                    </Button>
                    {props.isLogged.username === "" ? (
                      <div>
                        <Button
                          variant="outlined"
                          size="medium"
                          className={classes.margin}
                          disabled
                        >
                          <Link to="/checkout"> Check out</Link>
                        </Button>
                        <p style={{ color: "#e84118" }}>You have to login!</p>
                      </div>
                    ) : (
                      <Button
                        variant="outlined"
                        size="medium"
                        className={classes.margin}
                      >
                        <Link to="/checkout">Check out</Link>
                      </Button>
                    )}
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
    cart_data: state.cart,
    isLogged: state.isLogged
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (id_cart, value) => {
      dispatch(updateCart(id_cart, value));
    },
    deleteCart: (id_cart) => {
      dispatch(deleteCart(id_cart));
    },
    increase: (id_cart) => {
      dispatch(increase(id_cart));
    },
    decrease: (id_cart) => {
      dispatch(decrease(id_cart));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
