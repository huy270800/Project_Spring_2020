import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import cart from "./cartReducer";


//combine all reducers
const allReducers = combineReducers({
  isLogged: loggedReducer,
  cart: cart
});
export default allReducers;
