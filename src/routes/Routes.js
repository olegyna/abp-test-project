import React from 'react';
import { Switch, Route } from 'react-router';
import MainPage from '../pages/MainPage';
import VariablesList from '../pages/VariablesList';
import VariableDetails from '../pages/VariableDetails';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/variables/" component={VariablesList} />
            <Route exact path="/variables/:id" component={VariableDetails} />
        </Switch>
    );
}

export default Routes;