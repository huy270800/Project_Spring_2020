import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles, Container, Box } from "@material-ui/core";

import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import ProductDetail from "../components/product/ProductDetail";
import * as constant from "../constants.json";

const styles = (theme) => ({
  pad: {
    padding: "16px 24px"
  },
  pic: {
    maxWidth: "100%",
    margin: "0 auto",
    display: "block"
  }
});
var chooseTop = [];
class PizzaDetail extends Component {
  state = {
    selected_size: "",
    selected_topping: [],
    quantity: 1,
    open: false
  };

  componentDidMount() {
    axios
      .get(constant.baseAddress + `/products/pizzas?id=${this.props.match.params.id}`)
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

  chooseTopping = (event) => {
    if (!this.state.selected_topping.includes(event.target.value)) {
      this.state.selected_topping.push(event.target.value);
    } else {
      this.state.selected_topping.splice(
        this.state.selected_topping.indexOf(event.target.value),
        1
      );
    }
    this.setState({ selected_topping: this.state.selected_topping });
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

  buttonOnClick = () => {
    this.props.handleClickOpen();
    this.handleAddToCart();
  };

  render() {
    return (
      <div>
        <Scroll showBelow={250} />
        <Container>
          <Box borderBottom={1}>
            <Navbar></Navbar>
            {/* {console.log(this.state)} */}
            <ProductDetail
              img={this.state.img}
              price={this.state.price}
              name={this.state.name}
              description={this.state.description}
              size={this.state.size}
              selected_size={this.state.selected_size}
              changeSize={this.changeSize}
              topping={this.props.topping}
              chooseTopping={this.chooseTopping}
              open={this.props.open}
              buttonOnClick={this.buttonOnClick}
              handleClose={this.props.handleClose}
            ></ProductDetail>
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
