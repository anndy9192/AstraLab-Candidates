import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Problems extends Component {
  render(){
    return(
      <div>
        <p>
        Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
          </p>      
          <div contentEditable='true'>
        <p> { `function boolToWord( bool ){
  //...
}`} </p>
      </div>
      <div>
        <Link to='/FinalScreen'>
        <button>
          Enviar hasta este punto
        </button>
        </Link>
        <Link to='/Problems2'>
        <button>
          Continuar
        </button>
        </Link>
      </div>
      </div>
    )
  }
}

export default Problems
