import { useContext } from 'react';
import Button from './Button';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../store/cart/cart-selector';
import { useSelector } from 'react-redux';

const CardDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const navigateHandler = () => navigate('checkout');

  return (
    <div className="cart-dropdown-container">
      <div className=" cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={navigateHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
