import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CheckedItems = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeItemWithBtnHandler,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        const { id, name, imageUrl, quantity, price } = cartItem;
        const decreaseHandler = () => removeItemFromCart(cartItem);
        const increaseHandler = () => addItemToCart(cartItem);
        return (
          <div key={id} className="checkout-item-container">
            <div className=" image-container">
              <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
              <div className="arrow" onClick={decreaseHandler}>
                &#10094;
              </div>
              <span className="value">{quantity}</span>
              <div className="arrow" onClick={increaseHandler}>
                &#10095;
              </div>
            </span>
            <span className="price">{price}</span>
            <span
              onClick={() => removeItemWithBtnHandler(cartItem)}
              className="remove-button"
            >
              &#10005;
            </span>
          </div>
        );
      })}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default CheckedItems;
