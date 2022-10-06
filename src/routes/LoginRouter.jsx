import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {LoginScreen} from '../pages/LoginScreen';
import AppRouter from './AppRouter';

const LoginRoute = () => {
  return (
    <>
      <AppRouter />
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </>
  )
}

export default LoginRoute;