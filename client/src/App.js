// dependencies
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
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
import SaladDetail from "./Salad/SaladDetail";
import PizzaDetail from "./Pizza/PizzaDetail";
import DrinkDetail from "./Beverages/DrinkDetail";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
      secondary: "white",
      third: "#ffa502"
    }
  }
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: [],
      salads: [],
      pizzas: [],
      beverages: [],
      selectedLocation: null , 
      searchResults: []
  }
  };
  componentDidMount() {
    axios
      .get("http://localhost:4000/salads")
      .then((res) => {
        this.setState({ salads: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4000/pizzas")
      .then((res) => {
        this.setState({ pizzas: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:4000/drinks")
      .then((res) => {
        this.setState({ beverages: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
      axios.get("http://localhost:4000/storeList")
      .then((res) => {
        this.setState({location: res.data});
        this.setState({searchResults: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  }
  SetSearchResults = (parameter) => {
    this.setState({ searchResults: parameter })
  };
  
  setSelectedLocation = (parameter) => {
    this.setState({ selectedLocation: parameter })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Header></Header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/pizza/:id"
              render={(props) => (
                <PizzaDetail pizzas={this.state.pizzas}></PizzaDetail>
              )}
            ></Route>
            <Route path="/pizza">
              <Pizza pizzas={this.state.pizzas}></Pizza>
            </Route>
            <Route
              path="/salad/:id"
              render={(props) => (
                <SaladDetail salads={this.state.salads}></SaladDetail>
              )}
            ></Route>
            <Route path="/salad">
              <Salad salads={this.state.salads}></Salad>
            </Route>
            <Route
              path="/beverages/:id"
              render={(props) => (
                <DrinkDetail beverages={this.state.beverages}></DrinkDetail>
              )}
            ></Route>
            <Route path="/beverages">
              <Beverages beverages={this.state.beverages}></Beverages>
            </Route>
            <Route path="/promotion" component={Promotion}></Route>
            <Route path="/storelist">
              <StoreList location={this.state.location}   
                          selectedLocation={this.state.selectedLocation}
                          searchResults={this.state.searchResults}
                          SetSearchResults={this.SetSearchResults}
                          setSelectedLocation={this.setSelectedLocation}
               ></StoreList></Route>
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
}

export default App;
