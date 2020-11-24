import React from "react";
import Map from "./Map";
import { Container, Box } from "@material-ui/core";
import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar";

const defaultProps = {
  border: 1
};

const border = {
  p: 3
};

export default function StoreList() {
  return (
    <div>
      <Scroll showBelow={250} />
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <Box {...border} borderTop={1}>
            <h3>Store List</h3>
          </Box>
          <Map />
        </Box>
      </Container>
    </div>
  );
}
