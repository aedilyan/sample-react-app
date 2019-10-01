import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import UserPage from './user/UserPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/user/:userId' component={UserPage} />          
        </Switch>
    );
};

export default Routes;