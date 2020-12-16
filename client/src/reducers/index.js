import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import cart from "./cartReducer";
import totalPrice from "./totalReducer";
//combine all reducers
const allReducers = combineReducers({
  isLogged: loggedReducer,
  cart: cart,
  totalPrice: totalPrice
});
export default allReducers;
