import React from 'react';
import './NavBar.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function NavBar() {
  return (
    <>
      <div className="header">
        <img
          className="logo"
          alt="search icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxrCtxejReLBqJp2TG7fHcidHXbpIMDoBXQ&usqp=CAU"
        />
        <div className="search">
          <input className="search-input" type="text" />
          <SearchIcon className="search-icon" />
        </div>
        <div className="navigation">
          <div className="options">
            <span className="guest"> Hello Guest </span>
            <span className="sign-in">Sign In</span>
          </div>
          <div className="options">
            <span clasName="orders"> Orders </span>
          </div>
          <div className="cart">
            <ShoppingBasketIcon />
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>
    </>
  );
}
