import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
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

export default function Size(props) {
  return (
    <div>
      <Typography variant="h6">SIZE</Typography>
      <FormControl id="size" component="fieldset">
        <RadioGroup
          defaultValue="Small"
          aria-label="size"
          name="size-radios"
          onChange={props.changeSize}
          value={props.selected_size}
        >
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {props.size &&
              props.size.map((s) => {
                return (
                  <Grid item xs={3}>
                    <FormControlLabel
                      key={s}
                      labelPlacement="bottom"
                      value={s}
                      label={s}
                      required={true}
                      control={<StyledRadio />}
                    ></FormControlLabel>
                  </Grid>
                );
              })}
          </Grid>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
