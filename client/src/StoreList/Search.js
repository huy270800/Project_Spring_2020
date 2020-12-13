import React, { Component } from "react";
import {
  Container,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
      <Container>
        <FormControl fullWidth onChange={this.searchIt} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            Find a store
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon></SearchIcon>
              </InputAdornment>
            }
            labelWidth={60}
          />
        </FormControl>

        {/* 
        <TextField
          type="text"
          onChange={this.searchIt}
          placeholder="Search for location here"
        ></TextField> */}
      </Container>
    );
  }
}
