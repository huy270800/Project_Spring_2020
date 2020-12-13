import React, { Component } from "react";
import Search from "./Search";
import { Container } from "@material-ui/core";

export default class Leftmenu extends Component {
  check(array) {
    if (array.delivery == false) return "Delivery unavailable";
    else return "Delivery available";
  }

  render() {
    let output = (
      <Container style={{ textAlign: "center", paddingBottom: "5vh" }}>
        <h1>Find a store</h1>
        <Search
          location={this.props.location}
          searchResults={this.props.searchResults}
          SetSearchResults={this.props.SetSearchResults}
        />
      </Container>
    );
    if (this.props.selectedLocation != null) {
      output = (
        <Container style={{ textAlign: "center" }}>
          <Search
            location={this.props.location}
            searchResults={this.props.searchResults}
            SetSearchResults={this.props.SetSearchResults}
          />
          <h3> Name: {this.props.selectedLocation.name}</h3>
          <p> Address: {this.props.selectedLocation.address}</p>
          <p> Delivery: {this.check(this.props.selectedLocation)}</p>
        </Container>
      );
    }
    console.log(this.props.location);
    return output;
  }
}
