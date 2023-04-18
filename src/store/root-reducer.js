import { combineReducers } from 'redux';
import { userReducer } from './user/user-reducers';
import { categoriesReducer } from './categories/category-reducer';
import { cartReducer } from './cart/cart-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
