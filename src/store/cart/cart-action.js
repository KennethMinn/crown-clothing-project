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

const removeItemBtn = (cartItems, productsToRemove) =>
  cartItems.filter(cartItem => cartItem.id !== productsToRemove.id);

const setIsCartOpen = bool => {
  dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
};

const addItemToCart = productsToAdd => {
  const newCartITems = renderCartItems(cartItems, productsToAdd);
  updateCartItemsReducer(newCartITems);
};

const removeItemFromCart = productsToRemove => {
  const newCartITems = removeCartItems(cartItems, productsToRemove);
  updateCartItemsReducer(newCartITems);
};

const removeItemWithBtnHandler = productsToRemove => {
  const newCartITems = removeItemBtn(cartItems, productsToRemove);
  updateCartItemsReducer(newCartITems);
};
