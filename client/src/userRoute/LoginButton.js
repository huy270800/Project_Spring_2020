import { React, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import {useSelector} from 'react-redux';

export default function LoginButton(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let isLogged = useSelector(state => state.isLogged);
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
      <Link to="/user/login">
        <button>REGISTER / LOGIN</button>
      </Link>
    );
  }
}
