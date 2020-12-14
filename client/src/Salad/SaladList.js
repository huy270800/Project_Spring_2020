import React from "react";
import { Container, Grid, CircularProgress, Box } from "@material-ui/core";
import SaladCard from "./SaladCard";
import { connect } from "react-redux";
import { addToCart } from "../actions/index";

function SaladList(props) {
  console.log(props);
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
          justify="flex-start"
          alignItems="center"
        >
          {props.salads.map((item) => {
            return (
              <SaladCard
                open={props.open}
                name={item.name}
                img={item.img}
                size={item.size}
                description={item.description}
                price={item.price}
                key={item.id}
                id={item.id}
              ></SaladCard>
            );
          })}
        </Grid>
      )}
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
export default connect(null, mapDispatchToProps)(SaladList);
