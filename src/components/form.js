import React from 'react';
import { Link } from "react-router-dom";
import './form.css';

class Form extends React.Component{

  constructor(args){
    super(args)
    this.state = {
      name: '',
      email: '',
      level: '',
    }
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
      render(){
        return(
          <div className="formContainer">
            <img className="companyLogo" src={require('../images/astraLogo.png')} alt="Company logo"></img>
            <h1 className="titles"> WELCOME</h1>

            <div className="formItems">
              <label htmlFor='name'>Name: </label>
              <input 
              value= {this.state.name} 
              onChange={this.onChange.bind(this)} 
              name='name' id='name' className='name' type='text' placeholder="Enter first and last name"/><br></br>

              <label htmlFor='email'>Email: </label>
              <input 
              value= {this.state.email} 
              onChange={this.onChange.bind(this)} 
              name='email' id='email' className='email' type='text' placeholder="Enter your email"/><br></br>

              <label htmlFor='level'>English level: </label>
              <select id='level' name='level' className='level'
              value={this.state.level}
              onChange={this.onChange.bind(this)}>
                <option value='basic'> Basic</option>
                <option value='intermediate'> Intermediate</option>
                <option value='advanced'> Advanced</option>
              </select>
            <div>
              <p>Select your experience level: </p>
              <input type='radio' id='experience1' name='experience' className='experience' value='junior' onChange={this.onChange.bind(this)}/>
              <label htmlFor='experience1'>JUNIOR</label>
              <input type='radio' id='experience2' name='experience' className='experience' value='consultor' onChange={this.onChange.bind(this)}/>
              <label htmlFor='experience2'>CONSULTOR</label>
              <input type='radio' id='experience3' name='experience' className='experience' value='senior' onChange={this.onChange.bind(this)}/>
              <label htmlFor='experience3'>SENIOR</label>
              <input type='radio' id='experience4' name='experience' className='experience' value='na' onChange={this.onChange.bind(this)}/>
              <label htmlFor='experience4'>I DON'T KNOW</label>
            </div>
            </div>
            <div className="btnsInContainer">
              <Link to="/">
                <button className="returnBtn">RETURN</button>
                </Link>
              <Link to="/IndicationsScreen">
                <button className="continueBtn">CONTINUE</button>
              </Link>
            </div>
            <div>
            {/* <p>{JSON.stringify(this.state)}</p> */}
            </div>

        
          </div>
        )
      }
    }

export default Form;