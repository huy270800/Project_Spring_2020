import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@material-ui/core/";

export default function Navbar() {
  return (
    <Box p={1}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={6}
          >
            <Grid item>
              <h2>Pizza Palace</h2>
            </Grid>
            <Grid item>
              <h2>ESTD. 2020</h2>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button>
            <Link to="/"> Register/ Login</Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
