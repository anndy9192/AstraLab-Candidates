import React from 'react';

class Form extends React.Component{

  constructor(args){
    super(args)
    this.state = {
      name: '',
      email: '',
      level:'',
    }
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


      render(){
        return(
          
          <div>
            <h1>
              Registry
            </h1>
            <label for='name'>Name: </label>
            <input 
            value= {this.state.name} 
            onChange={this.onChange.bind(this)} 
            name='name' id='name' type='text'/>

            <label for='email'>Email: </label>
            <input 
            value= {this.state.email} 
            onChange={this.onChange.bind(this)} 
            name='email' id='email' type='text'/>

            <label htmlFor='level'>English level: </label>
            <select id='level' name='level' 
            value={this.state.level}
            onChange={this.onChange.bind(this)}>
              <option value='basic'> Basic</option>
              <option value='intermediate'> Intermediate</option>
              <option value='advanced'> Advanced</option>
            </select>

            <label htmlFor='experience'>Select your experience level: </label>
            <input type='radio' name='experience' value='junior' onChange={this.onChange.bind(this)} /> Junior
            <input type='radio' name='experience' value='consultor' onChange={this.onChange.bind(this)}/> Consultor
            <input type='radio' name='experience' value='senior' onChange={this.onChange.bind(this)}/> Senior
            <input type='radio' name='experience' value='na' onChange={this.onChange.bind(this)}/> I don't know

              <button>Return</button>
              <button>Continue</button>
            <div>
            <p>{JSON.stringify(this.state)}</p>
            </div>

        
          </div>
        )
      }
    }

export default Form;