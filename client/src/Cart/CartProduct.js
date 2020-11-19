import React from "react";
import { Grid, Button, TextField, Box } from "@material-ui/core";

export default function CartProduct() {
  return (
    <Box>
      <hr color="#e1e1e1"></hr>
      <Box marginTop={4} marginBottom={4}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={3}>
            <img
              style={{ maxWidth: "90%" }}
              src="../assets/img/salad.jpg"
              alt="product img"
            ></img>
          </Grid>
          <Grid item md={9}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <h4>Name </h4>
                <p>Size - </p>
                <p>Topping</p>
              </Grid>
              <Grid item>
                <TextField type="number"></TextField>
              </Grid>
              <Grid item>
                <p>Price</p>
              </Grid>
              <Grid item>
                <Button>Delete</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
