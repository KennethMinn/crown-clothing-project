import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cart/cart-action';
import Button from './Button';
import { selectCartItems } from '../store/cart/cart-selector';

const ShopCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ShopCard;
