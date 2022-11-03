import { combineReducers, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import cartReducer from './reducers/cartReducers';

const initialState = {};

const reducer = combineReducers({
	cart: cartReducer,
});

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools()
);

export default store;