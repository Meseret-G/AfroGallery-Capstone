import React from 'react';
import './NavBar.scss';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { Button, ButtonGroup, NavbarBrand } from 'reactstrap';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { signInUser, signOutUser } from '../api/auth';

export default function NavBar({ user }) {
  return (
    <div className="header">
      <NavbarBrand className="nav-logo" href="/">
        {' '}
        Habesha MiniMart{' '}
      </NavbarBrand>
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxrCtxejReLBqJp2TG7fHcidHXbpIMDoBXQ&usqp=CAU"
        href="/"
      />
      <div className="search">
        <input className="search-input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <ButtonGroup>
        <Button type="button" href="/">
          Home
        </Button>
        <Button type="button" href="/orders">
          Orders
        </Button>
        <Button type="button" href="/search">
          Search
        </Button>
        {user ? (
          <Button type="button" href="/paymentmethods">
            Payment Methods
          </Button>
        ) : (
          ''
        )}
      </ButtonGroup>
      <div className="cart" href="/cart">
        <ShoppingBasketIcon />
        <span className="cart-count">0</span>
      </div>
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
