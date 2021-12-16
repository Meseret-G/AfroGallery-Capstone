import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import OrdersView from '../views/OrdersView';
import CartView from '../views/CartView';

export default function AuthedRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/shoppingcart"
        component={() => <OrdersView user={user} />}
      />
      <Route
        exact
        path="/shoppingcart"
        component={() => <CartView user={user} />}
      />
    </Switch>
  );
}

AuthedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AuthedRoutes.defaultProps = {
  user: null,
};
