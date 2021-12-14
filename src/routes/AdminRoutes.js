import PropTypes from 'prop-types';
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import SearchView from '../views/SearchView';
import ProductView from '../views/ProductView';
import ProductForm from '../components/ProductForm';
import EditProduct from '../components/EditProduct';
import CartView from '../views/CartView';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={ProductView} user={user} />
      <Route exact path="/edit/:key">
        <EditProduct />
      </Route>
      <Route exact path="/createproduct">
        <ProductForm user={user} />
      </Route>
      <Route exact path="/search" component={SearchView} />
      <Route exact path="/shoppingcart" component={CartView} />
    </Switch>
  );
}

AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
