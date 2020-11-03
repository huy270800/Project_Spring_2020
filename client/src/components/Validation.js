import {React, useEffect} from 'react';
import axios from 'axios';
import constants from '../constants.json';

//Can't reach this from the App. It's meant to redirect URL to the API.
export default function Validation(props) {

     //redirect request to api
    useEffect(() => {
        axios.get(constants.baseAddress + props.location.pathname)
        .then(response => {
            console.log('Got response: ' + response.data);
            alert("Success!");
            props.history.push('/');
        })
        .catch(error => { 
            console.log(error);
            alert("Something went wrong :(");
            props.history.push('/');
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h2> Your request is being processed. </h2>
        </div>
    )
}
