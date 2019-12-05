import React from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen.js';
import IndicationsScreen from './components/IndicationsScreen.js';

function App() {
  return (
    <section className="mainComponent">
      <WelcomeScreen/>
      <IndicationsScreen/>
    </section>
  );
}

export default App;
