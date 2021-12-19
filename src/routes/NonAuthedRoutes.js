import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../views/SignIn';
import SearchView from '../views/SearchView';
import ProductView from '../views/ProductView';
import ProductDetails from '../components/ProductDetails';

export default function NonAuthedRoutes({ user }) {
  console.warn(user);
  return (
    <Switch>
      <Route exact path="/" component={() => <ProductView />} />
      <Route exact path="/details/:fbKey">
        <ProductDetails />
      </Route>
      <Route exact path="/search" component={SearchView} />
      <Route exact path="/sign-in" component={() => <SignIn />} />
    </Switch>
  );
}

NonAuthedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};
NonAuthedRoutes.defaultProps = {
  user: null,
};
