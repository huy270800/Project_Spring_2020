import React from 'react';
import styles from "./History.module.css";

export default function HistoryItem(props) {
    return (
        <>
            <div className={styles.gridItem}>{props.username}</div>
            <div className={styles.gridItem}>{props.detail}</div>
            <button className={styles.gridItem} onClick={()=>props.progressOrder(props.id)} >{props.status}</button>
        </>
    )
}
