import React from 'react';
import { Link } from "react-router-dom";
import styles from './DropdownMenu.module.css';

//username dropdown-menu
export default function DropdownMenu(props) {

    return (
        <div className = {styles.container} >
            <Link to = '/user/account'> <button> account </button> </Link>
            <Link to = '/' > <button onClick={props.clearUser} > log out </button> </Link>
        </div>
    )
}
