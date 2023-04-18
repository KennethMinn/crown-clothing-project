import { combineReducers } from 'redux';
import { userReducer } from './user/user-reducers';
import { categoriesReducer } from './categories/category-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
