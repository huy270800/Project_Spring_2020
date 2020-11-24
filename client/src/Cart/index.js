import React from "react";
import { Link } from "react-router-dom";
import Scroll from "../components/Scroll";
import { Container, Box, Grid, Button, makeStyles } from "@material-ui/core";
import Navbar from "../components/Navbar";
import CartProduct from "./CartProduct";

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

export default function Cart() {
  const classes = useStyles();
  return (
    <div>
      <Scroll showBelow={250}></Scroll>
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <Box {...border} borderTop={1}>
            <h3>Product</h3>
            <CartProduct></CartProduct>
            <CartProduct></CartProduct>
          </Box>
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
                <h2> 200</h2>
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
      </Container>
    </div>
  );
}
