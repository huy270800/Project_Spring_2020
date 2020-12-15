import { React, useState, useEffect } from "react";
import axios from "axios";
import constants from "../constants.json";
import { useSelector } from "react-redux";
import HistoryItem from "./HistoryItem";
import styles from "./History.module.css";
import { Container, Box } from "@material-ui/core";
import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar.js";

const defaultProps = {
  border: 1
};

export default function History(props) {
  let isLogged = useSelector((state) => state.isLogged);
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: constants.baseAddress + "/orders",
      auth: {
        username: isLogged.username,
        password: isLogged.password
      }
    })
      .then((response) => {
        setOrderHistory(response.data);
        console.log("Got order history: " + response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong :(");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Scroll showBelow={250}></Scroll>
      <Container {...defaultProps} borderTop={0}>
        <Navbar></Navbar>
        <Box>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>Date</div>
            <div className={styles.gridItem}>Detail</div>
            <div className={styles.gridItem}>Status</div>
            {orderHistory.map((order) => (
              <HistoryItem {...order} key={order.id} />
            ))}
          </div>
        </Box>
      </Container>
    </div>
  );
}

/*<div>
            User: {isLogged.username}
            <button onClick={()=>console.log(orderHistory[0].detail)}>test</button>
            {<ul> {orderHistory.map(order => <HistoryList {...order} key={order.id} />)} </ul>}
            </div>*/
