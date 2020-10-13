import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import EntitiesMap from './pages/EntitiesMap';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/app' component={EntitiesMap} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;