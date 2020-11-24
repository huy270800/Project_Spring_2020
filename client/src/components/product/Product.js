import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
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

export default function Product(props) {
  const classes = useStyles();
  return (
    <Box m={2} style={{ marginBottom: "30vh" }}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Product"
            height="160"
            src={props.img}
          />
          <CardContent style={{ height: "10vh" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ padding: "5vh 3vh" }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="body1" color="textSecondary" component="p">
                From
              </Typography>
              <Typography variant="h5">{props.price} </Typography>
            </Grid>
            <Grid item>
              <Button>
                <Link to={"/salad/" + props.id}>see more</Link>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
}
