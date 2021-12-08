import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateProduct from '../views/CartView';
// import ProductView from '../views/ProductView';
import ProductForm from '../components/ProductForm';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/edit/:key"
        component={() => <CreateProduct user={user} />}
      />
      <Route
        exact
        path="/createproduct"
        component={() => <ProductForm user={user} />}
      />
    </Switch>
  );
}

AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
