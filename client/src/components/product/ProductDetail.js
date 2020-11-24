import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Button,
  Container,
  Grid,
  Typography,
  Box,
  TextField
} from "@material-ui/core";

import Topping from "./Topping";
import Size from "./Size";
import topping from "../../Pizza/top.json";
import Scroll from "../Scroll";
import Navbar from "../Navbar";

const style = (theme) => ({
  pad: {
    padding: "16px 24px"
  }
});

const border = {
  p: 3
};

class ProductDetail extends Component {
  state = {
    topping: topping.topping
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/salads/${this.props.match.params.id}`)
      .then((res) => {
        console.log(this.props);
        const { id, name, price, size, img, description } = res.data;
        this.setState({
          id,
          name,
          price,
          size,
          img,
          description
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Scroll showBelow={250} />
        <Container>
          <Box borderBottom={1}>
            <Navbar></Navbar>
            <Box {...border} borderTop={1}>
              <h3>Salad</h3>
            </Box>
            <Grid
              container
              direction="row"
              justify="space-between"
              style={{ padding: "10vh " }}
              spacing={6}
            >
              <Grid item xs={6}>
                <img
                  src="../assets/img/detailedsalad.png"
                  alt="Products"
                  style={{ maxWidth: "100%" }}
                ></img>
                <Typography variant="h6" align="center">
                  {this.state.price}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h5">{this.state.name}</Typography>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography>Customer's choice</Typography>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography>{this.state.description}</Typography>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h6">SIZE</Typography>
                  <Size size={this.state.size}></Size>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h6">TOPPING</Typography>
                  <Topping topping={this.state.topping}></Topping>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h6">NOTE</Typography>
                  <form noValidate autoComplete="off">
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </form>
                </Box>
                <Button fullWidth>Add to cart</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    );
  }
}
export default withRouter(withStyles(style)(ProductDetail));
