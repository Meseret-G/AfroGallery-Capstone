import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import CreateProduct from '../views/CartView';
// import ProductView from '../views/ProductView';
import ProductForm from '../components/ProductForm';
import EditProduct from '../components/EditProduct';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/edit/:key">
        <EditProduct user={user} />
      </Route>
      <Route exact path="/createproduct">
        <ProductForm user={user} />
      </Route>
    </Switch>
  );
}

AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
