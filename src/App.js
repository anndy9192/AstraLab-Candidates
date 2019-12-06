import React from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen.js';
import Form from './components/form'
import IndicationsScreen from './components/IndicationsScreen.js';
import Router from './router';

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
