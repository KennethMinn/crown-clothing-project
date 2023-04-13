import { createContext, useReducer } from 'react';
import {createAction} from '../utils/reducer.utils';

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

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  // addItemToCart: () => {},
});

const CART_ACTION_TYPES = {
  SET_CART_ITEM: 'SET_CART_ITEM',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled error ${type}`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = newCartItems => {
    const newCartCount = newCartItems.reduce((pv, cv) => pv + cv.quantity, 0);

    const newCartTotal = newCartItems.reduce(
      (pv, cv) => pv + cv.quantity * cv.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEM, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

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

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    cartTotal,
    removeItemFromCart,
    removeItemWithBtnHandler,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
