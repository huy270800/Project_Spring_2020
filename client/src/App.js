// dependencies
import React, { useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

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
import Home from "./Home/Home";
import Pizza from "./Pizza/Pizza";
import Cart from "./Cart/Cart";
import Drinks from "./Drinks/Drinks";
import Promotions from "./Promotions/Promotions";
import Salad from "./Salad/Salad";
import StoreList from "./StoreList/StoreList";

import PizzaBuilder from "./PizzaBuilder/PizzaBuilder";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e17055",
      secondary: "white",
      third: "#d63031"
    }
  }
});

function App() {
  //use these for authentication purposes
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const clearUser = () => {
    setUsername(null);
    setPassword(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header></Header>
        <Switch>
          <div>
            <h1> Pizza Palace App </h1>
            <LoginButton username={username} clearUser={clearUser} />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={Pizza}></Route>
          <Route path="/salad" component={Salad}></Route>
          <Route path="/drinks" component={Drinks}></Route>
          <Route path="/promotions" component={Promotions}></Route>
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
        <PizzaBuilder />
      </div>
    </ThemeProvider>
  );
}

export default App;
