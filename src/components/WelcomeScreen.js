import React from 'react';
import './WelcomeScreen.css';

function WelcomeScreen () {
  return (
    <div className="welcomeContainer">
      <img className="candLogo" src={require('../images/candidatesLogo.png')} alt="Candidates logo"></img>
      <p className="postulateBtn">POSTULATE</p>
      <img className="tshLogo" src={require('../images/tshLogo.png')} alt="TSH logo"></img>
    </div>
  );
}

export default WelcomeScreen;
