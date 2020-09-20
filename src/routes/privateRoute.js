import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../components/providers/userProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
    let { user } = useContext(UserContext);

    return (
        <Route {...rest} render={() => {
            return user ? <Component /> : <Redirect to={{
                pathname: '/'
            }} />
        }} />
    );
};

export default PrivateRoute;