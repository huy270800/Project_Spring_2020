import React from "react";
import { Container, Grid, CircularProgress, Box } from "@material-ui/core";
import PizzaCard from "./PizzaCard";

export default function PizzaList(props) {
  return (
    <Container>
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
          justify="space-around"
          alignItems="center"
        >
          {props.pizzas.map((item) => {
            return (
              <PizzaCard
                handleOpenClose={props.handleOpenClose}
                open={props.open}
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
    </Container>
  );
}
