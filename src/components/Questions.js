import React, { Component } from 'react';
import firestore from './firebase';
import { Link } from "react-router-dom";

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

        <div className="container">
          {randomQuestions.map((question) =>
            <div className="main_container" key={question.id}>
              <p>Question: {question.Question}</p>
              <div className="answers_container">
                {question.Answers.map((answer) =>
                  <label>
                    <input type="radio" value={answer} name={question.id} />{answer}
                  </label>
                )}
              </div>
              <br />
            </div>
          )}
          <Link to="/FinalScreen">
          <button>
            Siguiente
          </button>
          </Link>
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