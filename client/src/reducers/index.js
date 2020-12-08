import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import cart from "./cartReducer";

import cartReducer from '../features/cart/cartSlice';

//combine all reducers
const allReducers = combineReducers({
  isLogged: loggedReducer,
  cart: cartReducer
});
export default allReducers;
