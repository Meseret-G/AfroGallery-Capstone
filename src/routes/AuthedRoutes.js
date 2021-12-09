import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ProductView from '../views/ProductView';
import OrdersView from '../views/OrdersView';
import CartView from '../views/CartView';

export default function AuthedRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={ProductView}>
        {' '}
      </Route>
      <Route exact path="/order" component={() => <OrdersView user={user} />} />
      <Route exact path="/cart" component={() => <CartView user={user} />} />
    </Switch>
  );
}

AuthedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AuthedRoutes.defaultProps = {
  user: null,
};
