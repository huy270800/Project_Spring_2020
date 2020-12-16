import React from "react";
import { connect } from "react-redux";
import { Container, Grid, CircularProgress, Box } from "@material-ui/core";
import PizzaCard from "./PizzaCard";
import { addToCart } from "../actions/index";

function PizzaList(props) {
  return (
    <Container>
      {<h3>Seafood Pizza</h3>}
      {props.isLoading ? (
        <Box
          width="100%"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {props.pizzas
            .filter((item) => item.seafood === true)
            .map((item) => {
              return (
                <PizzaCard
                  addToCart={props.addToCart}
                  name={item.name}
                  img={item.img}
                  size={item.size}
                  description={item.description}
                  price={item.price}
                  key={item.id}
                  id={item.id}
                ></PizzaCard>
              );
            })}
        </Grid>
      )}
      {<h3>Mixed Pizza</h3>}
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {props.pizzas
          .filter((item) => item.mixed === true)
          .map((item) => {
            return (
              <PizzaCard
                addToCart={props.addToCart}
                name={item.name}
                img={item.img}
                size={item.size}
                description={item.description}
                price={item.price}
                key={item.id}
                id={item.id}
              ></PizzaCard>
            );
          })}
      </Grid>
      {<h3>Traditional Pizza</h3>}
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {props.pizzas
          .filter((item) => item.traditional === true)
          .map((item) => {
            return (
              <PizzaCard
                addToCart={props.addToCart}
                name={item.name}
                img={item.img}
                size={item.size}
                description={item.description}
                price={item.price}
                key={item.id}
                id={item.id}
              ></PizzaCard>
            );
          })}
      </Grid>
      {<h3>Filled Pizza</h3>}
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {props.pizzas
          .filter((item) => item.filling === true)
          .map((item) => {
            return (
              <PizzaCard
                addToCart={props.addToCart}
                name={item.name}
                img={item.img}
                size={item.size}
                description={item.description}
                price={item.price}
                key={item.id}
                id={item.id}
              ></PizzaCard>
            );
          })}
      </Grid>
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    }
  };
};
export default connect(null, mapDispatchToProps)(PizzaList);
