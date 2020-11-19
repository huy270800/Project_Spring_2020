import { React, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function LoginButton(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let isLogged = useSelector((state) => state.isLogged);
  if (isLogged.username) {
    return (
      <div
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <div> {isLogged.username} &nbsp; </div>
        {dropdownOpen && <DropdownMenu />}
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
