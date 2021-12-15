import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../views/SignIn';
import SearchView from '../views/SearchView';
import ProductView from '../views/ProductView';

export default function NonAuthedRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={ProductView} />
      <Route exact path="/search" component={SearchView} />
      <Route exact path="/sign-in" component={() => <SignIn />} />
    </Switch>
  );
}
