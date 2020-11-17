import { React, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
<<<<<<< HEAD
import { Button } from "@material-ui/core";
=======
import {useSelector} from 'react-redux';
>>>>>>> 01eb855c1b013dd490a5188391ae6159181eff39

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
<<<<<<< HEAD
      <Button>
        <Link to="/user/login"> Register/ Login</Link>
      </Button>
=======
      <Link to="/user/login">
        <button>REGISTER / LOGIN</button>
      </Link>
>>>>>>> 01eb855c1b013dd490a5188391ae6159181eff39
    );
  }
}
