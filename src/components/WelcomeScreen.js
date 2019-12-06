import React from 'react';
import { Link } from "react-router-dom";
import './WelcomeScreen.css';

function WelcomeScreen () {
  return (
    <div className="welcomeContainer">
      <img className="candLogo" src={require('../images/candidatesLogo.png')} alt="Candidates logo"></img>
      <div className="btnsWelContainer">
        <Link to="/IndicationsScreen">
        <button className="postulateBtn">POSTULATE</button>
        </Link>
      </div>
      <img className="tshLogo" src={require('../images/tshLogo.png')} alt="TSH logo"></img>
    </div>
  );
}

export default WelcomeScreen;
