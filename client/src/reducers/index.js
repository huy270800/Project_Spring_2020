import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

//combine all reducers
const allReducers = combineReducers({
    isLogged: loggedReducer
})
export default allReducers;