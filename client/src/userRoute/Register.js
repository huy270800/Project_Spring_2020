import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { Link } from "react-router-dom";
import constants from '../constants.json';
import styles from './User.module.css';

//register form
export default function Login(props) {

    //send new user to api
    const registerUser = (event) => {
        event.preventDefault();
        if(!event.target['username'].value){
            alert('please enter a username!');
            return;
        }
        if(!event.target['email'].value){
            alert('please enter an email!');
            return;
        }
        if(!event.target['password'].value){
            alert('please enter a password!');
            return;
        }
        if(event.target['password'].value !== event.target['password2'].value){
            alert('passwords did not match!');
            return;
        }
        axios({
            method: 'post',
            url: constants.baseAddress + '/users',
            data: qs.stringify({
                username: event.target['username'].value,
                email: event.target['email'].value,
                password: event.target['password'].value
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
        .then(response => {
            console.log('create user successful.');
            props.history.push('/confirmEmail');
        })
        .catch(error => { 
            console.error(error);
            alert(" This user already exists. ");
        });
    }

    return (
        <div className={styles.container}>
            <h2>Welcome to the Pizza Palace!</h2>
            <form onSubmit={ registerUser }>
                <div>
                    Username: <input className={styles.textfield} type="text" name="username" />
                </div>
                <div>
                    E-mail: <input className={styles.textfield} type="email" name="email" />
                </div>
                <div>
                    Password: <input className={styles.textfield} type="password" name="password" />
                </div>
                <div>
                    Repeat Password: <input className={styles.textfield} type="password" name="password2" />
                </div>
                <div>
                    Create new Pizzalover: <button className={styles.button} type="submit">Register</button>
                </div>
            </form>
            You already have an account? <Link to = '/user/login'> <button className={styles.button} > log in </button> </Link>
        </div>
    )
}
