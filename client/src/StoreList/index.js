import React from "react";
import Map from "./Map";
import LeftMenu from "./LeftMenu"
import { Container, Box } from "@material-ui/core";
import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar";


const defaultProps = {
  border: 1
};

const border = {
  p: 3
};

export default function StoreList(props) {
  let output;
  let CharData;
  output = (
    <div >
    <div>
        <LeftMenu
            location={props.location}
            selectedLocation={props.selectedLocation}
            CharData={CharData}
            setSelectedLocation={props.setSelectedLocation}
            searchResults={props.searchResults}
            SetSearchResults={props.SetSearchResults}
        />
        <Map
            location={props.location}
            CharData={CharData}
            searchResults={props.searchResults}
            setSelectedLocation={props.setSelectedLocation}
        />
    </div>
</div>
)
  return (
    <div>
      <Scroll showBelow={250} />
      <Container>
        <Box {...defaultProps} borderTop={0}>
          <Navbar></Navbar>
          <Box {...border} borderTop={1}>
            <h3>Store List</h3>
          </Box>
         {output}
        </Box>
      </Container>
    </div>
  );
}
