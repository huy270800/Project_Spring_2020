import React from 'react';
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute(props) {
    let output = null;
    if(!props.username){
        output = <Redirect to = '/user/login' /> ;
    }
    else{
        output = <Route {...props} /> ;
    }

    return <React.Fragment>{ output }</React.Fragment> ;
}
