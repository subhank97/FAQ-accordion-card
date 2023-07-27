import './App.css';
import React, { useState } from 'react';
import image from './images/illustration-woman-online-desktop.svg'

function App() {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswers = (index) => {
    setShowAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const freQuestion = [
    {
      "How many team memebers can i invite": "1"
    },
    {
      "What is the maximum file upload size": "1"
    },
    {
      "How do i rest my password": "1"
    },
    {
      "Can I cancel my subscription": "1"
    },
    {
      "Do you provide additonal support": "1"
    }
  ]

  return (
    <div class="main">
      <div class="card">

        <div class="image-container">
          <img class='woman-computer' src={image} alt="" />
        </div>

        <div class='content-container'>

          <div class="title">
            <h1>FAQ</h1>
          </div>

          <div className="list">
            {freQuestion.map((question, index) => (
              <div key={index}>
                <h4 className="questions" onClick={() => toggleAnswers(index)}>
                  {Object.keys(question)[0]}
                </h4>
                {showAnswers[index] && (
                  <p className="answers">{Object.values(question)[0]}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
