import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../components/providers/userProvider';

import { Header } from '../components';

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => {
        return user ? (
          <div>
            <Header />
            <Component />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
