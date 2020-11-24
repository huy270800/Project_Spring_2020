import React from "react";
import { Container, Grid, CircularProgress, Box } from "@material-ui/core";
import Drink from "./DrinkCard";

export default function DrinkList(props) {
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
          {props.beverages.map((item) => {
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
    </Container>
  );
}
