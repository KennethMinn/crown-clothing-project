import { Outlet, Link, useLocation } from 'react-router-dom';
// import { ReactComponent as CrownLogo } from "../assets/crown.svg";
import myLogo from '../assets/crown.svg';
import { signOutStart } from '../store/user/user-action';
import CardIcon from '../components/CartIcon';
import CardDropdown from '../components/CartDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../store/user/user-selector';
import { selectIsCartOpen } from '../store/cart/cart-selector';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  const location = useLocation();

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
      <SwitchTransition>
        <CSSTransition timeout={500} classNames="fade" key={location.pathname}>
          <Outlet />
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};

export default Navigation;
