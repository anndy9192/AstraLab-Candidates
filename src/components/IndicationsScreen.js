import React from 'react';
import { Link } from "react-router-dom";
import './IndicationsScreen.css';

function IndicationsScreen () {
  return (
    <div className="indicationsContainer">
      <img className="companyLogo" src={require('../images/astraLogo.png')} alt="Company logo"></img>
      <h1 className="titles"> INDICATIONS</h1>
      <p className="indications">{`Welcome to the technical test, it will start once you press the 
      START TEST button below and you will have 30 minutes to complete it, so please find a stable internet connection and a
      confortable spot to continue. 
      At first you'll see a section with theoretical questions and then you will find the technical problems accordingly to the experience 
      level selected. If you selected the I don't know option you will receive all the questions from junior to senior level.
      Remember that you won't be able to return to the previous screen to check your answers.`}
      <br></br><br></br>
      {`You have the choice to finish the test at the point you decide it to just by clicking the SEND AT THIS POINT button. The results will be validated after you
      complete the process. Be aware that you can only apply two times and in the third attempt your account will be blocked.`}</p>
      <div className="btnsInContainer">
      <Link to="/form">
        <button className="returnBtn">RETURN</button>
        </Link>
        <Link to="/Questions">
        <button className="startTestBtn">START TEST</button>
        </Link>
      </div>
    </div>
  );
}

export default IndicationsScreen;