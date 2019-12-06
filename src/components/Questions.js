import React, { Component } from 'react';
import firestore from './firebase';

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
    if (questions) {
      return (

        <div className="container">
          {questions.map((question) =>
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
          <button>
            Siguiente
          </button>
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