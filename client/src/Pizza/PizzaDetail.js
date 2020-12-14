import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  withStyles,
  Container,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import AddToCart from "../components/product/AddToCart";
import Size from "../components/product/Size";
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import * as constant from "../constants.json";

const styles = (theme) => ({
  pad: {
    padding: "16px 24px"
  },
  pic: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "block"
  },
  mar: {
    marginTop: 6,
    padding: theme.spacing(1)
  }
});
class PizzaDetail extends Component {
  state = {
    selected_size: "Small",
    selected_topping: [],
    quantity: 1,
    valueSize: ""
  };

  componentDidMount() {
    axios
      .get(
        constant.baseAddress + `/products/pizzas/${this.props.match.params.id}`
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
        console.log(
          constant.baseAddress + `pizzas/${this.props.match.params.id}`
        );
      });
  }

  changeSize = (event) => {
    this.setState({ selected_size: event.target.value });
  };
  handleCheck(e, x) {
    this.setState((state) => ({
      selected_topping: state.selected_topping.includes(x)
        ? state.selected_topping.filter((c) => c !== x)
        : [...state.selected_topping, x]
    }));
  }

  handleAddToCart = () => {
    const {
      id,
      name,
      price,
      selected_size,
      selected_topping,
      quantity,
      img
    } = this.state;
    this.props.addToCart({
      id_cart: "cart_" + Date.now() + Math.random(),
      id_product: id,
      name,
      price,
      img,
      size: selected_size,
      quantity,
      toppings: selected_topping
    });
  };
  buttonOnClick = () => {
    this.props.handleClickOpen();
    this.handleAddToCart();
    this.setState({
      selected_size: "Small",
      selected_topping: []
    });
  };

  render() {
    return (
      <div>
        <Scroll showBelow={250} />
        <Container>
          <Box borderBottom={1}>
            <Navbar></Navbar>
            <Box>
              <Link to="/pizza">
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
                  alt="Products"
                  className={this.props.classes.pic}
                ></img>
                <Typography variant="h6" align="center">
                  €{this.state.price}
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
                    valueSize={this.state.valueSize}
                  ></Size>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h6">TOPPINGS</Typography>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    {this.props.topping.map((x) => {
                      return (
                        <Grid item xs={4} className={this.props.classes.mar}>
                          <Button
                            variant="outlined"
                            color="primary"
                            style={{ width: "100%" }}
                          >
                            <FormControlLabel
                              style={{ margin: "0 0" }}
                              control={
                                <Box height="20vh">
                                  <img src={x.img} alt={x.name}></img>
                                  <Typography align="center">
                                    {x.name}
                                  </Typography>
                                  <Typography>+ €{x.price} </Typography>
                                  <Checkbox
                                    key={x.name.toString()}
                                    onChange={(e) =>
                                      this.handleCheck(e, x.name)
                                    }
                                    checked={this.state.selected_topping.includes(
                                      x.name
                                    )}
                                  ></Checkbox>
                                </Box>
                              }
                            ></FormControlLabel>
                          </Button>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h6">NOTE</Typography>
                  <form noValidate autoComplete="off">
                    <TextField
                      className="note"
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
                ></AddToCart>
              </Grid>
            </Grid>
            {/* <ProductDetail
              img={this.state.img}
              id={this.state.id}
              price={this.state.price}
              name={this.state.name}
              description={this.state.description}
              size={this.state.size}
              selected_size={this.state.selected_size}
              changeSize={this.changeSize}
              topping={this.props.topping}
              quantity={this.state.quantity}
              chooseTopping={this.chooseTopping}
              selected_topping={this.state.selected_topping}
              open={this.props.open}
              buttonOnClick={this.buttonOnClick}
              handleClose={this.props.handleClose}
              handleCheck={this.handleCheck}
            ></ProductDetail> */}
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
    },
  };
};
export default connect(
 null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(PizzaDetail)));
