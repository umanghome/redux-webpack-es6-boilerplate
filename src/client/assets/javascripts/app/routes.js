import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import Home from './components/Home';
import NotFoundView from 'components/NotFound';
import Login from './components/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
