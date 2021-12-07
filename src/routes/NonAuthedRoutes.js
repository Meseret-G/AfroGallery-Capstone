import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import OrdersView from '../views/OrdersView';
import CartView from '../views/CartView';
import SignIn from '../views/SignIn';

export default function NonAuthedRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={() => <HomeView user={user} />} />
      <Route exact path="/order" component={() => <OrdersView user={user} />} />
      <Route exact path="/sign-in" component={() => <SignIn user={user} />} />
      <Route exact path="/cart" component={() => <CartView user={user} />} />
    </Switch>
  );
}

NonAuthedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

NonAuthedRoutes.defaultProps = {
  user: null,
};
