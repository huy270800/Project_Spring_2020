import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "5%",
    width: "5vw",
    height: "5vh",
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    border: "2px solid #00b041"
  }
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={
        <span className={clsx(classes.icon, classes.checkedIcon)}></span>
      }
      icon={<span className={classes.icon}></span>}
      {...props}
    />
  );
}

export default function Size() {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        defaultValue="small"
        aria-label="gender"
        name="customized-radios"
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <FormControlLabel
              value="small"
              control={<StyledRadio />}
              label="Small"
              labelPlacement="bottom"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              value="medium"
              control={<StyledRadio />}
              label="Medium"
              labelPlacement="bottom"
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              value="large"
              control={<StyledRadio />}
              label="Large"
              labelPlacement="bottom"
            />
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
