import React from "react";
import { Container, Box } from "@material-ui/core";
// components
import Carousel from "./Carousel";
import Navbar from "../components/Navbar";
import PizzaCategory from "./PizzaCategory";
import SaladCategory from "./SaladCategory";
import DrinksCategory from "./DrinksCategory";
import Scroll from "../components/Scroll";

const defaultProps = {
  border: 1
};

export default function Home() {
  return (
    <div>
      <Scroll showBelow={250} />
      <Carousel></Carousel>
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <PizzaCategory></PizzaCategory>
          <SaladCategory></SaladCategory>
          <DrinksCategory></DrinksCategory>
        </Box>
      </Container>
    </div>
  );
}
