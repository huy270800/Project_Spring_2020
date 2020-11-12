import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Container,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.secondary,
    "& a": {
      color: theme.palette.primary.main
    }
  },
  copyrights: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.secondary,
    minHeight: "5vh"
  }
}));
const defaultProps = {
  border: 1
};

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Box {...defaultProps} borderTop={0} p={3}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            className={classes.root}
          >
            <Grid item>
              <Typography>
                <Button>
                  <Link to="/">Home</Link>
                </Button>
              </Typography>
              <Typography>
                <Button>
                  <Link to="/storelist">Store List</Link>
                </Button>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Button>
                  <Link to="/pizza">Pizza</Link>{" "}
                </Button>
              </Typography>
              <Typography>
                <Button>
                  <Link to="/salad">Salad</Link>
                </Button>
              </Typography>
              <Typography>
                <Button>
                  <Link to="/drinks">Drinks</Link>
                </Button>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Button>
                  <Link to="/pizza">Promotions</Link>
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box className={classes.copyrights} p={2}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography>
              Pizza Palace Project. 2020 All rights reserved
            </Typography>
          </Grid>
          <Grid item>By: Tobias Muehlbauer, Huy Bui and Ha Quyen</Grid>
        </Grid>
      </Box>
    </div>
  );
}
