import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from './App.module.css';
import LoginButton from './userRoute/LoginButton';
import User from './userRoute/User';
import Validation from './components/Validation';
import ConfirmEmail from './userRoute/ConfirmEmail';

function App() {

  //use these for authentication purposes
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const clearUser = () => {
    setUsername(null);
    setPassword(null);
  }

  return (
    <div className={styles.background} >
    <div className={styles.app} >
    <Router >
      <div className={styles.container} >
        <h1> Pizza Palace App </h1>
        <LoginButton username = {username} clearUser = {clearUser} />
      </div>
      <Route path="/user" render = { (routeProps) => <User {...routeProps}
                                                            setUsername={setUsername}
                                                            setPassword={setPassword}
                                                            username= {username}
                                                            password={password} /> } />
      <Route path="/*/validation" component = {Validation} />
      <Route path="/confirmEmail" component = {ConfirmEmail} />
    </Router>
    </div>
    </div>
  );
}

export default App;