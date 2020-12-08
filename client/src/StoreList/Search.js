import React, { Component } from "react";

export default class Search extends Component {
  searchIt = (event) => {
    this.props.SetSearchResults(event.target.value);
    if (event.target.value == "<empty string>" || event.target.value == "0") {
      this.props.SetSearchResults(this.props.location);
    } else {
      let array = [];
      this.props.location.map((item) => {
        if (
          item.name.includes(event.target.value) ||
          item.address.includes(event.target.value)
        ) {
          array.push(item);
        }
      });
      this.props.SetSearchResults(array);
    }
    console.log(this.props.searchResult);
  };
  render() {
    return (
      <div>
        <input
          type={"text"}
          onChange={this.searchIt}
          placeholder="Search for location here"
        ></input>
      </div>
    );
  }
}
