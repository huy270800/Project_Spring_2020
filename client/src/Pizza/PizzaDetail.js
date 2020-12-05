import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  withStyles,
  Button,
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import topping from "./Toppings.json";
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import Topping from "../components/product/Topping.js";
import Size from "../components/product/Size.js";

const styles = (theme) => ({
  pad: {
    padding: "16px 24px"
  },
  pic: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "block"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const border = {
  p: 3
};

var choseTop = [];

class PizzaDetail extends Component {
  state = {
    topping: topping.topping,
    selected_size: "",
    selected_topping: [],
    quantity: 1,
    alert: false
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/pizzas/${this.props.match.params.id}`)
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
    console.log(this.state.selected_size);
  };

  chooseTopping = (event) => {
    if (!choseTop.includes(event.target.value)) {
      choseTop.push(event.target.value);
    } else {
      choseTop.splice(choseTop.indexOf(event.target.value), 1);
    }
    this.setState({ selected_topping: choseTop });
  };
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
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  clearInput = () => {
    document.getElementsByClassName("note").value = "";
  };
  buttonOnClick = () => {
    this.handleClickOpen();
    this.handleAddToCart();
    this.clearInput();
  };
  render() {
    return (
      <div>
        <Scroll showBelow={250} />
        <Container>
          <Box borderBottom={1}>
            <Navbar></Navbar>
            <Box {...border} borderTop={1}>
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
                  {this.state.price} €
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h5">{this.state.name}</Typography>
                </Box>
                <Box className={this.props.classes.pad}></Box>
                <Box className={this.props.classes.pad}>
                  <Typography>{this.state.description}</Typography>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h6">SIZE</Typography>
                  <Size
                    size={this.state.size}
                    selected_size={this.state.selected_size}
                    changeSize={this.changeSize}
                  ></Size>
                </Box>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h6">TOPPINGS</Typography>

                  <Topping
                    topping={this.state.topping}
                    chooseTopping={this.chooseTopping}
                  ></Topping>
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
                <Button fullWidth onClick={this.buttonOnClick}>
                  Add to cart
                </Button>
                <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-describedby="alert-dialog-description"
                  maxWidth="sm"
                  fullWidth
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Your item has added to cart!
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Ok!
                    </Button>
                  </DialogActions>
                </Dialog>
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
)(withRouter(withStyles(styles)(PizzaDetail)));
