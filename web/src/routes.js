import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import EntitiesMap from './pages/EntitiesMap';
import Entity from './pages/Entities';
import CreateEntity from './pages/CreateEntities';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/app' component={EntitiesMap} />
                <Route path='/entities' component={CreateEntity} />
                <Route path='/entities/:id' component={Entity} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;