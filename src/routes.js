import React from 'react';
import Form from './components/form'
import WelcomeScreen from './components/WelcomeScreen'
import IndicationsScreen from './components/IndicationsScreen'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Switch>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/IndicationsScreen" component={IndicationsScreen}/>
        <Route exact path="/" component={WelcomeScreen}/>
    </Switch>
    </BrowserRouter>
)

export default Routes