// dependencies
<<<<<<< HEAD
import React, { useState } from "react";
import { Switch, Route, Router } from "react-router-dom";
=======
import React from "react";
import { Switch, Route } from "react-router-dom";
>>>>>>> 01eb855c1b013dd490a5188391ae6159181eff39

import LoginButton from "./userRoute/LoginButton";
import User from "./userRoute/User";
import Validation from "./components/Validation";
import ConfirmEmail from "./userRoute/ConfirmEmail";

// style
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home/index";
import Pizza from "./Pizza/index";
import Cart from "./Cart/index";
import Beverages from "./Beverages/index";
import Promotion from "./Promotion/index";
import Salad from "./Salad/index";
import StoreList from "./StoreList/index";
import Login from "./userRoute/Login";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
      secondary: "white",
      third: "#ffa502"
    }
  }
});

function App() {
<<<<<<< HEAD
  //use these for authentication purposes
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const clearUser = () => {
    setUsername(null);
    setPassword(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>

      <Switch>
        <Route
          path="/user"
          render={(routeProps) => (
            <User
              {...routeProps}
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
            />
          )}
        />
        {/* <div>
          <LoginButton username={username} clearUser={clearUser} />
        </div> */}

        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={Pizza}></Route>
        <Route path="/salad" component={Salad}></Route>
        <Route path="/beverages" component={Beverages}></Route>
        <Route path="/promotion" component={Promotion}></Route>
        <Route path="/storelist" component={StoreList}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route
          path="/user"
          render={(routeProps) => (
            <User
              {...routeProps}
              setUsername={setUsername}
              setPassword={setPassword}
              username={username}
              password={password}
            />
          )}
        />
        <Route path="/*/validation" component={Validation} />
        <Route path="/confirmEmail" component={ConfirmEmail} />
      </Switch>
      <Footer></Footer>
=======
  return (
    <ThemeProvider theme={theme}>
    <LoginButton />
      <div>
        <Header></Header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={Pizza}></Route>
          <Route path="/salad" component={Salad}></Route>
          <Route path="/beverages" component={Beverages}></Route>
          <Route path="/promotion" component={Promotion}></Route>
          <Route path="/storelist" component={StoreList}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/user" component={User} />
          <Route path="/*/validation" component={Validation} />
          <Route path="/confirmEmail" component={ConfirmEmail} />
        </Switch>
        <Footer></Footer>
      </div>
>>>>>>> 01eb855c1b013dd490a5188391ae6159181eff39
    </ThemeProvider>
  );
}

export default App;
