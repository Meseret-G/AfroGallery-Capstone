import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import CreateProduct from '../views/CartView';
// import ProductView from '../views/ProductView';
import ProductForm from '../components/ProductForm';
import EditProduct from '../components/EditProduct';
// import CartView from '../views/CartView';
// import OrdersView from '../views/OrdersView';

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
  //   cartItems: PropTypes.func.isRequired,
};

AdminRoutes.defaultProps = {
  user: null,
};
