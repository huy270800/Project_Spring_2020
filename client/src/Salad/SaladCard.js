import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Button
} from "@material-ui/core/";
import { Link } from "react-router-dom";
// import Detail from "./Detail";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function SaladCard(props) {
  const classes = useStyles();
  return (
    <Grid item md={3}>
      <Box m={2} style={{ marginBottom: "10vh" }}>
        <Link to={"/salads/" + props.id}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              alt="Product"
              height="100%"
              width="100%"
              src={props.img}
            />
            <CardContent style={{ height: "10vh" }}>
              <h3> {props.name}</h3>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
            </CardContent>

            <CardActions style={{ padding: "10vh 3vh" }}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                    From
                  </Typography>
                  <Typography variant="h5">€{props.price} </Typography>
                </Grid>
                <Grid item>
                  <Button>
                    <Link to={"/salads/" + props.id}>see more</Link>
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Link>
      </Box>
    </Grid>
  );
}
