import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateProduct from '../views/CartView';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/createproduct"
        component={() => <CreateProduct user={user} />}
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
