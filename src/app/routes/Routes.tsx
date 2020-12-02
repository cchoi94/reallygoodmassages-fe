import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Path } from '../Path';
import { Home } from '../components/home/home';
import { Therapy } from 'app/components/therapy/therapy';
import { Glossary } from 'app/components/glossary/glossary';
import { Whatscoming } from 'app/components/whatscoming/whatscoming';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={Path.HOME}>
        <Home />
      </Route>
      <Route path={Path.GLOSSARY}>
        <Glossary />
      </Route>
      <Route path={Path.GLOSSARY}>
        <Glossary />
      </Route>
      <Route path={Path.WHATSCOMMING}>
        <Whatscoming />
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
