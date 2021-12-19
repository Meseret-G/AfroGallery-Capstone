import React from 'react';
import './NavBar.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../api/auth';

export default function NavBar({ user }) {
  return (
    <div className="header">
      <Link className="nav-logo" href="/">
        {' '}
        AFRO-GALLERY{' '}
      </Link>
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxrCtxejReLBqJp2TG7fHcidHXbpIMDoBXQ&usqp=CAU"
        href="/"
      />
      <div className="nav-options">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/search">Search</Link>
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
