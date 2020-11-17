import { React, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { Button } from "@material-ui/core";

export default function LoginButton(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  if (props.username) {
    return (
      <div
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <div> {props.username} &nbsp; </div>
        {dropdownOpen && <DropdownMenu {...props} />}
      </div>
    );
  } else {
    return (
      <Button>
        <Link to="/user/login"> Register/ Login</Link>
      </Button>
    );
  }
}
