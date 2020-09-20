import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Header } from '../components';
import { Main, LeaderBoard, History } from '../containers';
import PrivateRoute from './privateRoute';
import UserProvider from '../components/providers/userProvider';

const Routes = () => {
    return (
        <Router>
            <UserProvider>
                <Header />

                <Switch>
                    <Route exact path="/leaderBoard" component={LeaderBoard} />
                    <PrivateRoute path="/history" component={History} />
                    <Route path="/" component={Main} />
                </Switch>
            </UserProvider>
        </Router>
    );
};

export default Routes;