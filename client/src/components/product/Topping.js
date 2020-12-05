import React from "react";
import {
  makeStyles,
  Button,
  Grid,
  Typography,
  Box,
  FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mar: {
    marginTop: 6,
    padding: theme.spacing(1)
  }
}));

export default function Topping(props) {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      {props.topping.map((top) => {
        return (
          <Grid item xs={4} className={classes.mar} key={top.id}>
            <Button
              // onChange={handleChange}
              variant="outlined"
              color="primary"
              style={{ width: "100%" }}
            >
              <FormControlLabel
                style={{ margin: "0 0" }}
                control={
                  <Box height="20vh">
                    <img src={top.img} alt={top.name}></img>
                    <Typography align="center">{top.name}</Typography>
                    <Typography>+ {top.price} €</Typography>

                    <input
                      className="topping"
                      type="checkbox"
                      value={top.name}
                      onChange={props.chooseTopping}
                    ></input>
                  </Box>
                }
              />
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}
