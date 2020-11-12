import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Grid
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function Product() {
  const classes = useStyles();
  return (
    <Box m={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="160"
            src="../assets/img/salad.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Ingre
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
              <Typography variant="h5">10e</Typography>
            </Grid>
            <Grid item>
              <Button mr="auto" size="small" color="primary">
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Box>
  );
}
