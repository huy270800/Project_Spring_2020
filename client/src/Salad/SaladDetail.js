import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Container,
  Grid,
  Typography,
  Box,
  TextField
} from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import * as constant from "../constants.json";
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import Size from "../components/product/Size.js";
import AddToCart from "../components/product/AddToCart.js";

const style = (theme) => ({
  pad: {
    padding: "16px 24px"
  },
  pic: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "block"
  }
});

const border = {
  p: 3
};

class SaladDetail extends Component {
  state = {
    selected_size: "Small",
    quantity: 1
  };

  componentDidMount() {
    axios
      .get(
        constant.baseAddress + `/products/salads/${this.props.match.params.id}`
      )
      .then((res) => {
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
  changeSize = (event) => {
    this.setState({ selected_size: event.target.value });
  };
  buttonOnClick = () => {
    this.props.handleClickOpen();
    this.handleAddToCart();
  };
  handleAddToCart = () => {
    const { id, name, price, selected_size, quantity, img } = this.state;
    this.props.addToCart({
      id_cart: "cart_" + Date.now() + Math.random(),
      id_product: id,
      name,
      price,
      img,
      size: selected_size,
      quantity
    });
  };

  render() {
    return (
      <div>
        <Scroll showBelow={250} />
        <Container>
          <Box borderBottom={1}>
            <Navbar></Navbar>
            <Box {...border} borderTop={1}>
              <Link to="/salads">
                <h3>
                  <ArrowBackIosIcon></ArrowBackIosIcon>
                </h3>
              </Link>
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
                  src={this.state.img}
                  data-img={this.state.img}
                  alt="Products"
                  className={this.props.classes.pic}
                ></img>
                <Typography variant="h6" align="center">
                  {this.state.price} €
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h5">{this.state.name}</Typography>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography>{this.state.description}</Typography>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Size
                    size={this.state.size}
                    selected_size={this.state.selected_size}
                    changeSize={this.changeSize}
                  ></Size>
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
                <AddToCart
                  buttonOnClick={this.buttonOnClick}
                  open={this.props.open}
                  handleClose={this.props.handleClose}
                  size={this.state.selected_size}
                ></AddToCart>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(style)(SaladDetail)));
