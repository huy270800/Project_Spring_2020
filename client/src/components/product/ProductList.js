import React from "react";
import { Container, Grid, CircularProgress, Box } from "@material-ui/core";
import Product from "./Product";

export default function ProductList(props) {
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
          {props.products.map((item) => {
            return (
              <Product
                handleOpenClose={props.handleOpenClose}
                open={props.open}
                name={item.name}
                description={item.description}
                price={item.price}
              ></Product>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}
