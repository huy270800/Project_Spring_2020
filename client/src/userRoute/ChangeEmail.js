import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'qs';
import constants from '../constants.json';
import styles from './User.module.css';

export default function ChangeEmail(props) {
    
    const changeEmail = (event) => {
        event.preventDefault();
        if(!event.target['email'].value){
            alert('please enter an email address !');
            return;
        }
        if(event.target['password'].value !== props.password){
            alert('wrong password!');
            return;
        }
        axios({
            method: 'put',
            url: constants.baseAddress + '/users/changeEmail',
            auth: {
                username: props.username,
                password: props.password
            },
            data: qs.stringify({
                email: event.target['email'].value
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
        .then(response => {
            console.log('Email change successful.');
            props.history.push('/user/account');
        })
        .catch(error => { 
            console.error(error);
            alert("This email is already in use.");
        });
    }
    return (
        <div className={styles.container} >
            <div className={styles.flex}>
                <h2>Change Email </h2>
                <Link className={styles.button2} to='/user/account' > <button> close </button> </Link>
            </div>
            <form onSubmit={ changeEmail }>
                <div>
                    New Email: <input className={styles.textfield} type="email" name="email" />
                </div>
                <div>
                    Your Password: <input className={styles.textfield} type="password" name="password" />
                </div>
                <div>
                    Change email: <button className={styles.button} type="submit">confirm</button>
                </div>
            </form>
        </div>
    )
}
