import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Path } from '../Path';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={Path.HOME}>
        Home
      </Route>
      <Route path={Path.SIGNIN}>Sign In</Route>
      <Route path={Path.SIGNOUT}>Sign Out</Route>
    </Switch>
  );
};

export default Routes;
