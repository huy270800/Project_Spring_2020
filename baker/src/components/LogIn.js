import React from 'react';
import axios from 'axios';
import constants from '../constants';

export default function LogIn(props) {
    
    function login(event){    
        event.preventDefault();
        if (!event.target["username"].value) {
            alert("please enter a username!");
            return;
        }
        if (!event.target["password"].value) {
            alert("please enter a password!");
            return;
        }
        axios({
            method: "post",
            url: constants.baseAddress + "/login",
            auth: {
                username: event.target["username"].value,
                password: event.target["password"].value
            }
        })
        .then((response) => {
            console.log("Log in successful.");
            props.setUser(event.target['username'].value, event.target['password'].value);
            props.history.push("/");
        })
          .catch((error) => {
            console.error(error);
            alert("Wrong username or password. Log in failed.");
          });
    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                Please give your username and password to login
            </div>

            <form onSubmit={ login }>
                <div>
                Username <input type="text" name="username" />
                </div>
                <div>
                Password <input type="password" name="password" />
                </div>
                <div>
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
