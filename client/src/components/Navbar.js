import React from "react";
import { Box, Grid } from "@material-ui/core/";
import LoginButton from "../userRoute/LoginButton";

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
          {/* <Button>
            <Link to="/"> Register/ Login</Link>
          </Button> */}
          <LoginButton></LoginButton>
        </Grid>
      </Grid>
    </Box>
  );
}
