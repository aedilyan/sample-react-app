import { Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
const HomePage = lazy(() => import('./home/HomePage'));
const UserPage = lazy(() => import('./user/UserPage'));
const AboutPage = lazy(() => import('./about/AboutPage'));


const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/user/:userId' component={UserPage} />
                <Route path='/about' component={AboutPage} />
            </Switch>
        </Suspense>
    );
};

export default Routes;