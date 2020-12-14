import React, { Component } from "react";
import { Checkbox, FormControlLabel, Button } from "@material-ui/core";

export default class Demo extends Component {
  state = {
    data: ["apple", "kiwi", "banana", "lime", "orange", "grape"],
    checkedValues: []
  };

  handleCheck(e, x) {
    this.setState((state) => ({
      checkedValues: state.checkedValues.includes(x)
        ? state.checkedValues.filter((c) => c !== x)
        : [...state.checkedValues, x]
    }));
  }
  clear = () => {
    this.setState({ checkedValues: [] });
  };

  render() {
    return (
      <div>
        {/* {this.state.data.map((x) => (
          <FormControlLabel
            label={x}
            control={
              <Checkbox
                key={x.toString()}
                onChange={(e) => this.handleCheck(e, x)}
                checked={this.state.checkedValues.includes(x)}
              />
            }
          ></FormControlLabel>
        ))} */}
        {this.props.topping.map((x) => (
          <FormControlLabel
            label={x.name}
            control={
              <Checkbox
                key={x.name.toString()}
                onChange={(e) => this.handleCheck(e, x.name)}
                checked={this.state.checkedValues.includes(x.name)}
              ></Checkbox>
            }
          ></FormControlLabel>
        ))}
        <Button onClick={this.clear}>clear</Button>
      </div>
    );
  }
}
