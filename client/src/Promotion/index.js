import React from "react";
import { Container, Box } from "@material-ui/core";
import DetailedPromotion from "./DetailedPromotion";
import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar";
import Axios from "axios";

const defaultProps = {
  border: 1
};

const border = {
  p: 3
};

export default function Promotion(props) {
  console.log(props.promotion)
  return (
    <div>
      <Scroll showBelow={250}></Scroll>
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <Box {...border} borderTop={1}>
            <h3>Promotion</h3>
          </Box>
          <DetailedPromotion
          promotion={props.promotion}
            ></DetailedPromotion>
        </Box>
      </Container>
    </div>
  );
}
