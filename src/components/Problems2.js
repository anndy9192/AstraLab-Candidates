import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Problems extends Component {
  render(){
    return(
      <div>
        <p>
        Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
          </p>      
          <div contentEditable='true'>
        <p> { `function findOdd(A) {
  //happy coding!
  return 0;
}`} </p>
      </div>
      <div>
        <Link to='/FinalScreen'>
        <button>
          Enviar hasta este punto
        </button>
        </Link>
        <Link to='/FinalScreen'>
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
