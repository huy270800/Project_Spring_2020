import React from "react";
import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
  Box,
  TextField
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import Topping from "./Topping";
import Size from "./Size";

const useStyles = makeStyles((theme) => ({
  pad: {
    padding: "16px 24px"
  },
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "10%",
    width: 100,
    height: 50,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    border: "2px solid #00b041",
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  }
}));

export default function Detail(props) {
  const classes = useStyles();

  return (
    <div>
      <Button size="small" color="primary" onClick={props.handleOpenClose}>
        Add to cart
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={props.open}
        onClose={props.handleOpenClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogActions>
          <Button onClick={props.handleOpenClose} color="primary">
            <CloseIcon></CloseIcon>
          </Button>
        </DialogActions>
        <DialogContent>
          <Grid container direction="row" justify="space-between">
            <Grid item xs={6}>
              <img
                src="../assets/img/detailedsalad.png"
                alt="pic"
                style={{ maxWidth: "100%" }}
              ></img>
              <Typography variant="h6" align="center">
                Price
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.pad}>
                <Typography variant="h5">Name</Typography>
              </Box>
              <Box className={classes.pad}>
                <Typography>Customer's choice</Typography>
              </Box>
              <Box className={classes.pad}>
                <Typography>ingre</Typography>
              </Box>
              <Box className={classes.pad}>
                <Typography variant="h6">SIZE</Typography>
                <Grid container spacing={1}>
                  <Grid item>
                    <Size></Size>
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.pad}>
                <Typography variant="h6">TOPPING</Typography>
                <Topping></Topping>
              </Box>
              <Box className={classes.pad}>
                <Typography variant="h6">NOTE</Typography>
                <form noValidate autoComplete="off">
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </form>
              </Box>
              <Button onClick={props.handleOpenClose} fullWidth>
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
