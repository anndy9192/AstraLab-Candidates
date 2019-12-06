import React, { Component } from 'react';
import firestore from './firebase';
import { Link } from "react-router-dom";
import './Questions.css';

class Questions extends Component {

  state = {
    questions: "",
  }
  componentWillMount() {
    firestore.collection('Questions').get().then((snapShots) =>
      this.setState({
        questions: snapShots.docs.map((doc) => {
          let data = doc.data()
          data['id'] = doc.id
          return data
        })
      }))
  }

  render() {
    let questions = this.state.questions
    let randomQuestions = []
    if (questions) {
      for (var i = 0; i < 5; i++) {
        randomQuestions.push(questions[Math.floor(Math.random() * 9) + 0])
      }
      return (

        <div className="questionContainer">
          <img className="companyLogo" src={require('../images/astraLogo.png')} alt="Company logo"></img>
          <h1 className="titles"> QUESTIONS</h1>
          {randomQuestions.map((question) =>
            <div className="main_container" key={question.id}>
              <div className="questionAndAnswers">
                <p className="questionTitle">Question: {question.Question}</p>
                <div className="answers_container">
                  <p>
                  {question.Answers.map((answer) =>
                    <label>
                      <ul><input type="radio" value={answer} name={question.id} />{answer}</ul>
                    </label>
                  )}
                </p>
              </div>
            </div>
            </div>
          )}
          <div className="nextBtnContainer">
            <Link to="/Problems">
            <button className="nextBtn">
              NEXT
            </button>
            </Link>
          </div>
        </div>

      )
    }

    return (
      <div className="App">
        Loading...
      </div>
    );
  }
}

export default Questions