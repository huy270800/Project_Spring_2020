import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  TextField,
  makeStyles
} from "@material-ui/core";
import Topping from "./Topping";
import Size from "./Size";
import AddToCart from "./AddToCart";

const border = {
  p: 3
};

const useStyles = makeStyles({
  pad: {
    padding: "16px 24px"
  },
  pic: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "block"
  }
});

export default function ProductDetail(props) {
  const classes = useStyles();
  return (
    <div>
      <Box {...border} borderTop={1}>
        <Link to="/pizza">
          <h3>
            <ArrowBackIosIcon></ArrowBackIosIcon>
          </h3>
        </Link>
      </Box>
      <Grid
        container
        direction="row"
        justify="space-between"
        style={{ padding: "10vh " }}
        spacing={6}
      >
        <Grid item xs={6}>
          <img src={props.img} alt="Products" className={classes.pic}></img>
          <Typography variant="h6" align="center">
            €{props.price}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.pad}>
            <Typography variant="h5">{props.name}</Typography>
          </Box>
          <Box className={classes.pad}>
            <Typography>{props.description}</Typography>
          </Box>
          <Box className={classes.pad}>
            <Size
              size={props.size}
              selected_size={props.selected_size}
              changeSize={props.changeSize}
            ></Size>
          </Box>
          <Box className={classes.pad}>
            <Topping
              topping={props.topping}
              chooseTopping={props.chooseTopping}
              handleCheck={props.handleCheck}
              selected_topping={props.selected_topping}
            ></Topping>
          </Box>
          <Box className={classes.pad}>
            <Typography variant="h6">NOTE</Typography>
            <form noValidate autoComplete="off">
              <TextField
                className="note"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </form>
          </Box>
          <AddToCart
            buttonOnClick={props.buttonOnClick}
            open={props.open}
            handleClose={props.handleClose}
          ></AddToCart>
        </Grid>
      </Grid>
    </div>
  );
}
