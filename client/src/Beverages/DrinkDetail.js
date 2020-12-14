import React, { Component } from "react";
import { Link } from "react-router-dom";
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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import * as constant from "../constants.json"
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";


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

class DrinkDetail extends Component {
  state = {};
  componentDidMount() {
    axios
      .get(constant.baseAddress + `/drinks/${this.props.match.params.id}`)
      .then((res) => {
        console.log(this.props);
        const { id, name, price, img, description } = res.data;
        this.setState({
          id,
          name,
          price,
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
              <Link to="/beverages">
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
                  {this.state.price}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box className={this.props.classes.pad}>
                  <Typography variant="h5">{this.state.name}</Typography>
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
export default withRouter(withStyles(style)(DrinkDetail));
