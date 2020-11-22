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
  Grid
} from "@material-ui/core/";
import Detail from "./Detail";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function Product(props) {
  const classes = useStyles();
  return (
    <Box m={2} style={{ marginBottom: "10vh" }}>
      <Card className={classes.card} style={{ height: "45vh" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="160"
            src="../assets/img/salad.jpg"
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
        <CardActions>
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
              <Typography variant="h5">{props.price} e</Typography>
            </Grid>
            <Grid item>
              <Detail
                open={props.open}
                handleOpenClose={props.handleOpenClose}
                name={props.name}
                description={props.description}
                price={props.price}
              ></Detail>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
}
