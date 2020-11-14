import React from "react";
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
    marginTop: 6
  }
}));

export default function Topping() {
  const classes = useStyles();
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false
  });
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item className={classes.mar}>
        <Button onChange={handleChange} variant="outlined" color="primary">
          <FormControlLabel
            style={{ margin: "0 0" }}
            control={
              <Box>
                <img src="../assets/img/tomato.png" alt="tomato"></img>
                <Typography align="center">Tomato</Typography>
                <Typography>+1e</Typography>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked={state.checkedA}
                  name="checkedA"
                />
              </Box>
            }
          />
        </Button>
      </Grid>
      <Grid item className={classes.mar}>
        <Button onChange={handleChange} variant="outlined" color="primary">
          <FormControlLabel
            style={{ margin: "0 0" }}
            control={
              <Box>
                <img src="../assets/img/bacon.png" alt="tomato"></img>
                <Typography align="center">Bacon</Typography>
                <Typography>+1e</Typography>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked={state.checkedB}
                  name="checkedB"
                />
              </Box>
            }
          />
        </Button>
      </Grid>
      <Grid item className={classes.mar}>
        <Button onChange={handleChange} variant="outlined" color="primary">
          <FormControlLabel
            style={{ margin: "0 0" }}
            control={
              <Box>
                <img src="../assets/img/seafood.png" alt="tomato"></img>
                <Typography align="center">Seafood</Typography>
                <Typography>+1e</Typography>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked={state.checkedC}
                  name="checkedC"
                />
              </Box>
            }
          />
        </Button>
      </Grid>
      <Grid item className={classes.mar}>
        <Button onChange={handleChange} variant="outlined" color="primary">
          <FormControlLabel
            style={{ margin: "0 0" }}
            control={
              <Box>
                <img src="../assets/img/ham.png" alt="tomato"></img>
                <Typography align="center">Ham</Typography>
                <Typography>+1e</Typography>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked={state.checkedD}
                  name="checkedD"
                />
              </Box>
            }
          />
        </Button>
      </Grid>
      <Grid item className={classes.mar}>
        <Button onChange={handleChange} variant="outlined" color="primary">
          <FormControlLabel
            style={{ margin: "0 0" }}
            control={
              <Box>
                <img src="../assets/img/ham.png" alt="tomato"></img>
                <Typography align="center">Ham</Typography>
                <Typography>+1e</Typography>
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  checked={state.checkedD}
                  name="checkedD"
                />
              </Box>
            }
          />
        </Button>
      </Grid>
    </Grid>
  );
}
