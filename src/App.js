import React from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen.js';
import Form from './components/form'
import IndicationsScreen from './components/IndicationsScreen.js';
import FinalScreen from './components/FinalScreen';

function App() {
  return (
    <section className="mainComponent">
      <WelcomeScreen/>
      <Form/>
      <IndicationsScreen/>
      <FinalScreen/>
    </section>
  );
}

export default App;
