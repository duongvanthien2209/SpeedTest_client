import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from '../components';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return (
          <div>
            <Header />
            <Component />
          </div>
        );
      }}
    />
  );
};

export default PublicRoute;
