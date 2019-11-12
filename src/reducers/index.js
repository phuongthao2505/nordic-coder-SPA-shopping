import { combineReducers } from 'redux';

import cart from './cart';
import products from './products';
import app from './app';

const rootReducer = combineReducers({
  app,
  cart,
  products,
});

export default rootReducer;
