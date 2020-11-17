import React from 'react';
import { Redirect, Route } from "react-router-dom";
import {useSelector} from 'react-redux';

export default function ProtectedRoute(props) {
    let isLogged = useSelector(state => state.isLogged);
    let output = null;
    if(!isLogged.username){
        output = <Redirect to = '/user/login' /> ;
    }
    else{
        output = <Route {...props} /> ;
    }

    return <React.Fragment>{ output }</React.Fragment> ;
}
