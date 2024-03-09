import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import userReducer from '../reducers/userSlice';
import countReducer from './counterSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  user:userReducer,
  count:countReducer
});

export default rootReducer;
