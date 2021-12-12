import React from 'react';
import './NavBar.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { signInUser, signOutUser } from '../api/auth';

export default function NavBar({ user }) {
  return (
    <div className="header">
      <Link className="nav-logo" href="/">
        {' '}
        Habesha MiniMart{' '}
      </Link>
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxrCtxejReLBqJp2TG7fHcidHXbpIMDoBXQ&usqp=CAU"
        href="/"
      />
      <div className="nav-options">
        <Link to="/">Home</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/search">Search</Link>
        <Link to="/shoppingcart">Shopping Cart</Link>
        {user ? <Link to="/paymentmethods">Payment Methods</Link> : ''}
      </div>
      {/* <div className="cart" href="/cart">
        <ShoppingBasketIcon />
        <span className="cart-count">0</span>
      </div> */}

      {user ? (
        <button
          onClick={signOutUser}
          className="btn btn-primary"
          type="button"
          href="/sign-in"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={signInUser}
          className="btn btn-secondary"
          type="button"
          href="/sign-in"
        >
          Sign In
        </button>
      )}
    </div>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
NavBar.defaultProps = {
  user: null,
};
