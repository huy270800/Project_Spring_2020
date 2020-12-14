import React from 'react';
import styles from "./History.module.css";

export default function HistoryItem(props) {
    return (
        <>
            <div className={styles.gridItem}>{props.date}</div>
            <div className={styles.gridItem}>{props.detail}</div>
            <div className={styles.gridItem}>{props.status}</div>
        </>
    )
}
