import React from 'react';
// import { Link } from "react-router-dom";
import './IndicationsScreen.css';

function IndicationsScreen () {
  return (
    <div className="indicationsContainer">
      <img className="companyLogo" src={require('../images/astraLogo.png')} alt="Company logo"></img>
      <h1 className="titles"> INDICATIONS</h1>
      <p className="indications">{`Welcome to the technical test, it will start once you press the 
      START TEST button below and you will have 30 minutes to complete it, so please find a stable internet connection. 
      At first you'll see a section with theoretical and code questions accordingly to the experience level selected.
      Remember that you won't be able to return to the previous screen to check your answers.`}
      <br></br><br></br>
      {`If you selected the I don't know option you will receive questions from all the levels, however you'll
      have the choice to send your results at the point that you want. Be aware that you can only apply two times and
       in the third attempt your account will be blocked.`}</p>
      <div className="btnsInContainer">
        <button className="returnBtn">RETURN</button>
        <button className="startTestBtn">START TEST</button>
      </div>
    </div>
  );
}
//<p className="changeLanguage"><Link to="/portafolioEnEspañol" className="links">Spanish Version</Link></p>
export default IndicationsScreen;