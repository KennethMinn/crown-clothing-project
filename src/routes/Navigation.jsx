import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
// import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import myLogo from '../assets/crown.svg';
import { signOutUser } from '../utils/firebase';
import CardIcon from '../components/CartIcon';
import CardDropdown from '../components/CartDropdown';
import { CartContext } from '../contexts/CartContext';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../store/user/user-selector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={myLogo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="signIn">
              Sign in
            </Link>
          )}
          <CardIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
