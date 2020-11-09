import { React, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

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
      <Link to="/user/login">
        <button>log in or register</button>
      </Link>
    );
  }
}
