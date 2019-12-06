import React from 'react';
import Form from './components/form';
import WelcomeScreen from './components/WelcomeScreen';
import IndicationsScreen from './components/IndicationsScreen';
import Questions from './components/Questions';
import FinalScreen from './components/FinalScreen';
import Problems from './components/Problems';
import Problems2 from './components/Problems2';
import { HashRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <HashRouter>
   <Switch>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/IndicationsScreen" component={IndicationsScreen}/>
        <Route exact path="/Questions" component={Questions}/>
        <Route exact path="/Problems" component={Problems}/>
        <Route exact path="/Problems2" component={Problems2}/>
        <Route exact path="/FinalScreen" component={FinalScreen}/>
        <Route exact path="/" component={WelcomeScreen}/>
    </Switch>
    </HashRouter>
)

export default Routes