import { React, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import LogIn from './components/LogIn';
import axios from 'axios';
import constants from './constants';

function App() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const setUser = (na,pw) => {
    setUserName(na);
    setPassword(pw);
  }
  const [orders, setOrders] = useState([]);
  const progressOrder = (id) => {
    let ordersCopy = [...orders];
    let foundIndex = ordersCopy.findIndex(o => o.id === id);
    if(ordersCopy[foundIndex].status === 'pending'){
      axios({
        method: "put",
        url: constants.baseAddress + "/orders/",
        auth: {
            username: username,
            password: password
        },
        params:{
          id:id
        },
        data:{
          status:'delivery'
        }
      })
      .then((response)=>{
        console.log("updated order in server")
        ordersCopy[foundIndex].status = 'delivery';
        setOrders(ordersCopy);
      })
      .catch(error => {
        console.error(error);
        alert("couldn't update order in the server")
    })
    }else if(ordersCopy[foundIndex].status === 'delivery'){
      axios({
        method: "put",
        url: constants.baseAddress + "/orders/",
        auth: {
            username: username,
            password: password
        },
        params:{
          id:id
        },
        data:{
          status:'payed'
        }
      })
      .then((response)=>{
        console.log("updated order in server")
        ordersCopy[foundIndex].status = 'payed';
        setOrders(ordersCopy);
      })
      .catch(error => {
        console.error(error);
        alert("couldn't update order in the server")
      })
    }
  }

  return (
    <div>
      <Switch>
        <ProtectedRoute exact path="/" username={username} render={(routeProps ) => 
          <Home {...routeProps }
            username={username}
            password={password}
            orders = {orders}
            setOrders = {setOrders}
            progressOrder = {progressOrder}
          ></Home>}
        ></ProtectedRoute>
        <Route path="/login" render={(routeProps ) => 
          <LogIn {...routeProps }
            setUser = {setUser}
          ></LogIn>}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
