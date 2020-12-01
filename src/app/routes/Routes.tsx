import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Path } from '../Path';
import { Home } from '../components/home/home';
import { Therapy } from 'app/components/therapy/therapy';
import { About } from 'app/components/about/about';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={Path.HOME}>
        <Home />
      </Route>
      <Route path={Path.ABOUT}>
        <About />
      </Route>
      <Route path={Path.THERAPY}>
        <Therapy />
      </Route>
      <Route path={Path.SIGNIN}>Sign In</Route>
      <Route path={Path.SIGNOUT}>Sign Out</Route>
    </Switch>
  );
};

export default Routes;
