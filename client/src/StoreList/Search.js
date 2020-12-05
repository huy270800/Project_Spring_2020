import React, { Component } from "react";
import * as data from "./StoreList.json";

export default class Search extends Component {
  searchForIt(event) {
    this.props.SetSearchResult(event.target.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        Looking for sth ?<input type="text" onChange={this.searchForIt}></input>
      </div>
    );
  }
}
