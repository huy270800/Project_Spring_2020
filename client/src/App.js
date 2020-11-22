// dependencies
import React from "react";
import { Switch, Route } from "react-router-dom";

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
import Error from "./Error";
import User from "./User/User";
import Validation from "./components/Validation";
import ConfirmEmail from "./User/ConfirmEmail";
import Checkout from "./Checkout";

import ChangePw from "./User/ChangePw";

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
  return (
    <ThemeProvider theme={theme}>
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
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/*/validation" component={Validation} />
          <Route path="/confirmEmail" component={ConfirmEmail} />
          <Route path="/change" component={ChangePw}></Route>
          <Route component={Error}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
