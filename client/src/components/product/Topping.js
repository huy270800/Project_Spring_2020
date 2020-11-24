import React, { useState } from "react";
import {
  makeStyles,
  Button,
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles((theme) => ({
  mar: {
    marginTop: 6,
    padding: theme.spacing(1)
  }
}));

export default function Topping(props) {
  const classes = useStyles();
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };
  // const [state, setState] = useState({
  //   checkedA: false,
  //   checkedB: false,
  //   checkedC: false,
  //   checkedD: false
  // });
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
                    {/* <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      checked={top.selected}
                      name="checkedA"
                    /> */}
                    <input type="checkbox" value={top.name}></input>
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
