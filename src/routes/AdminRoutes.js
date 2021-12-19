import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditProduct from '../components/EditProduct';
import NewProducts from '../views/NewProducts';

export default function AdminRoutes({ admin }) {
  return (
    <Switch>
      <Route exact path="/edit/:key">
        <EditProduct />
      </Route>
      <Route exact path="/add">
        <NewProducts admin={admin} />
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
