import ShoppingBag from "../assets/shopping-bag.svg";
import { CartContext } from "../contexts/CartContext";
import { useState, useContext } from "react";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleCardDropdown = () => setIsCartOpen(!isCartOpen);
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={toggleCardDropdown}>
      <img src={ShoppingBag} className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CardIcon;
