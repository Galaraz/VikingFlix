import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  HomePage,
  Login,
  SignInPage,
  Details,
  NotFound,
  LoadingPage,
} from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/loading" component={LoadingPage} />    
    <Route path="/sigin" component={SignInPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/details/:id" component={Details} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;