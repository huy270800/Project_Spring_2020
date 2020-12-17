import {React, useEffect, useState} from 'react';
import axios from 'axios';
import constants from '../constants';
import styles from "./History.module.css";
import OrderItem from "./OrderItem";


export default function Home(props) {
    const [filterString, setFilterString] = useState('');
    //get email for logged in user
    useEffect(() => {
        axios({
            method: "get",
            url: constants.baseAddress + "/orders/all",
            auth: {
                username: props.username,
                password: props.password
            }
        })
        .then((response) => {
            props.setOrders(response.data);
            console.log("Got orders: " + response.data);
        })
        .catch((error) => {
            console.log(error);
            alert("Something went wrong :(");
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            Filter Options: &nbsp;
            <button onClick={()=>setFilterString('')} >all</button>
            <button onClick={()=>setFilterString('pending')} >pending</button>
            <button onClick={()=>setFilterString('delivery')} >delivery</button>
            <button onClick={()=>setFilterString('payed')} >payed</button>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>Customer</div>
                <div className={styles.gridItem}>Detail</div>
                <div className={styles.gridItem}>Status</div>  
                {props.orders.filter(o => o.status.includes(filterString)).map(order => <OrderItem {...order} progressOrder={props.progressOrder} key={order.id} />)}
            </div>
        </div>
    )
}
