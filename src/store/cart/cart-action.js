import { CART_ACTION_TYPES } from './cart-type';
import { createAction } from '../../utils/reducer.utils';

const renderCartItems = (cartItems, productsToAdd) => {
  //check existing product
  const existingItem = cartItems.find(item => item.id === productsToAdd.id);
  //if exists, increase quantity
  if (existingItem) {
    return cartItems.map(item =>
      item.id === productsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  //add a new product;
  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

const removeCartItems = (cartItems, productsToRemove) => {
  const existingItem = cartItems.find(item => item.id === productsToRemove.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productsToRemove.id);
  }

  return cartItems.map(item =>
    item.id === productsToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const removeItemBtn = (cartItems, productsToRemove) =>
  cartItems.filter(cartItem => cartItem.id !== productsToRemove.id);

export const setIsCartOpen = bool =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

export const addItemToCart = (cartItems, productsToAdd) => {
  const newCartITems = renderCartItems(cartItems, productsToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartITems);
};

export const removeItemFromCart = (cartItems, productsToRemove) => {
  const newCartITems = removeCartItems(cartItems, productsToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartITems);
};

export const removeItemWithBtnHandler = (cartItems, productsToRemove) => {
  const newCartITems = removeItemBtn(cartItems, productsToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEM, newCartITems);
};
