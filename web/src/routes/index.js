import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/Auth';
import {
  HomePage,
  Login,
  SignInPage,
  DetailsMP,
  ProfilechoosePage,
  LoadingPage,
  WatchListPage,
  NotFound,
} from '../pages';

const PrivateRoute = ({ component: Component, ...rest})=>(
  <Route
  {...rest}
  render={props =>
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to= {{pathname:'/', state:{from: props.location} }}/>
    ) 
  }
  />
);

const Routes = () => (
  
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/loading" component={LoadingPage} />    
    <PrivateRoute path="/profile" component={ProfilechoosePage} />
    <Route path="/sigin" component={SignInPage} />
    <PrivateRoute path="/home" component={HomePage} />
    <PrivateRoute path="/watchlist" component={WatchListPage} />
    <PrivateRoute path="/:media/:id" component={DetailsMP}/>
    <Route component={NotFound} />
  </Switch>
  
);

export default Routes;