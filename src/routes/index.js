import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainWrapper, LeaderBoard, History, PageNotFound } from '../containers';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path="/leaderBoard" component={LeaderBoard} />
      <PrivateRoute exact path="/history" component={History} />
      <PublicRoute exact path="/" component={MainWrapper} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
