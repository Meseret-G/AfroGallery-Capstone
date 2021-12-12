import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ProductView from '../views/ProductView';
import OrdersView from '../views/OrdersView';
import CartView from '../views/CartView';
import SearchView from '../views/SearchView';

export default function AuthedRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={CartView} />
      <Route exact path="/add/:fbKey" component={ProductView} />
      <Route exact path="/order" component={() => <OrdersView user={user} />} />
      <Route
        exact
        path="/shoppingcart"
        component={() => <CartView user={user} />}
      />
      <Route exact path="/search" component={SearchView} />
    </Switch>
  );
}

AuthedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AuthedRoutes.defaultProps = {
  user: null,
};
