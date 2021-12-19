import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import EditProduct from '../components/EditProduct';

export default function AdminRoutes({ admin }) {
  return (
    <Switch>
      <Route exact path="/edit/:key">
        <EditProduct />
      </Route>
      <Route exact path="/createproduct">
        <ProductForm admin={admin} />
      </Route>
      <Route exact path="/add">
        <ProductForm admin={admin} />
      </Route>
    </Switch>
  );
}

AdminRoutes.propTypes = {
  admin: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  admin: null,
};
