import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";

export default function DetailedPromotion(props) {
  console.log(props.promotion)
  return (
    <Box p={3} m={3} border={1} borderColor="#bdbdbd" borderRadius="5px">
      {props.promotion.map((item) => {
        return (
          <Grid container direction="row" justify="flex-start">
        <Grid item xs={5}>
          <img
            src={item.img}
            alt="promotion img"
            style={{ maxWidth: "90%" }}
          ></img>
        </Grid>
        <Grid item xs={7}>
          <h2 variant="h5">{item.name}: €{item.price}</h2>
          <Typography>{item.notes}</Typography>
          <Box textAlign="center">
            <Button variant="outlined">{item.code}</Button>
          </Box>
        </Grid>
      </Grid>
        )
      })}
      {/* <Grid container direction="row" justify="flex-start">
        <Grid item xs={5}>
          <img
            src=""
            alt="promotion img"
            style={{ maxWidth: "90%" }}
          ></img>
        </Grid>
        <Grid item xs={7}>
          <h2 variant="h5">Name</h2>
          <Typography>Content</Typography>
          <Box textAlign="center">
            <Button variant="outlined">buy1get1</Button>
          </Box>
        </Grid>
      </Grid> */}
    </Box>
  );
}
