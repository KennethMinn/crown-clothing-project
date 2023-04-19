import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cart/cart-selector';
import {
  addItemToCart,
  removeItemFromCart,
  removeItemWithBtnHandler,
} from '../store/cart/cart-action';

const CheckedItems = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

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

      {cartItems.map(cartItem => {
        const { id, name, imageUrl, quantity, price } = cartItem;
        const decreaseHandler = () =>
          dispatch(removeItemFromCart(cartItems, cartItem));
        const increaseHandler = () =>
          dispatch(addItemToCart(cartItems, cartItem));
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
            <span className="price">${price}</span>
            <span
              onClick={() =>
                dispatch(removeItemWithBtnHandler(cartItems, cartItem))
              }
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
