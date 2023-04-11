import { useState, createContext, useEffect } from "react";

const renderCartItems = (cartItems, productsToAdd) => {
  //check existing product
  const existingItem = cartItems.find((item) => item.id === productsToAdd.id);
  //if exists, increase quantity
  if (existingItem) {
    console.log(cartItems);
    return cartItems.map((item) =>
      item.id === productsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  //add a new product
  console.log([...cartItems]);
  return [...cartItems, { ...productsToAdd, quantity: 1 }];
};

const removeCartItems = (cartItems, productsToRemove) => {
  const existingItem = cartItems.find(
    (item) => item.id === productsToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productsToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === productsToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const removeItemBtn = (cartItems, productsToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== productsToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  // addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productsToAdd) => {
    setCartItems(renderCartItems(cartItems, productsToAdd));
    console.log(productsToAdd);
  };

  const removeItemFromCart = (productsToRemove) => {
    setCartItems(removeCartItems(cartItems, productsToRemove));
    console.log(productsToRemove);
  };

  const removeItemWithBtnHandler = (productsToRemove) => {
    setCartItems(removeItemBtn(cartItems, productsToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((pv, cv) => pv + cv.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (pv, cv) => pv + cv.quantity * cv.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

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
