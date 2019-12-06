import React from 'react';
// import { Link } from "react-router-dom";
import './IndicationsScreen.css';

function IndicationsScreen () {
  return (
    <div className="indicationsContainer">
      <img className="companyLogo" src={require('../images/astraLogo.png')} alt="Company logo"></img>
      <h1 className="titles"> INDICATIONS</h1>
      <p className="indications">Welcome to the technical test, it will start once you press the 
      START TEST button and you will have 30 minutes to answer. You'll find the first section with 
      theoretical questions, then the code exercises will appear one by one and you won't be able to 
      return to the previous exercises.</p>
      <div className="btnsInContainer">
        <button className="returnBtn">RETURN</button>
        <button className="startTestBtn">START TEST</button>
      </div>
    </div>
  );
}
//<p className="changeLanguage"><Link to="/portafolioEnEspañol" className="links">Spanish Version</Link></p>
export default IndicationsScreen;