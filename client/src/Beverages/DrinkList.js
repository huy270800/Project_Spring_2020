import React from "react";
import { Container, Grid, CircularProgress, Box } from "@material-ui/core";
import Drink from "./DrinkCard";

export default function DrinkList(props) {
  return (
    <Container>
      {<h3>Coke</h3>}
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
          {props.beverages
            .filter((item) => item.coke === true)
            .map((item) => {
              return (
                <Drink
                  name={item.name}
                  price={item.price}
                  key={item.id}
                  id={item.id}
                  img={item.img}
                ></Drink>
              );
            })}
        </Grid>
      )}
      {<h3>Beer</h3>}
      <Grid container direction="row" justify="flex-start" alignItems="center">
        {props.beverages
          .filter((item) => item.alcohol === true)
          .map((item) => {
            return (
              <Drink
                name={item.name}
                price={item.price}
                key={item.id}
                id={item.id}
                img={item.img}
              ></Drink>
            );
          })}
      </Grid>
    </Container>
  );
}
