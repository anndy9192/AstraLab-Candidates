import React from 'react';
import './FinalScreen.css';

function FinalScreen () {
    return (
      <div className="finalContainer">
        <div className="textFinalContainer">
            <p className="finalMessage">{`THANK YOU FOR POSTULATE!!`}
            <br></br><br></br>
            {`Your results will be send to the HR department once you 
            click on the button below. They will contact you shortly. Feel free to send us a comment about 
            your experience in this process, all the feedback is welcome.`}</p>
            <label htmlFor='comment'>Comments (optional): </label><br></br>
            <textarea name='comment' id='comment' className='comment' type='text' placeholder="Write a comment..."/>
        </div>
        <button className="sendResultsBtn">SEND RESULTS</button>
        <img className="tshLogo" src={require('../images/tshLogo.png')} alt="TSH logo"></img>
      </div>
    );
  }

  export default FinalScreen;