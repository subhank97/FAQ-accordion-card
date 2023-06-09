import './App.css';
import React, { useState } from 'react';
import image from './images/illustration-woman-online-desktop.svg'

function App() {
  const [showAnswers, setShowAnswers] = useState(false);

  const toggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

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

          <div class="list">
            <div>
              <h4 class="questions" onClick={toggleAnswers}>How many team memebers can i invite</h4>
              {showAnswers && <p className="answers">1</p>}
            </div>
            <div>
              <h4 class="questions" onClick={toggleAnswers}>What is the maximum file upload size</h4>
              {showAnswers && <p className="answers">1</p>}
            </div>
            <div>
              <h4 class="questions" onClick={toggleAnswers}>How do i rest my password</h4>
              {showAnswers && <p className="answers">1</p>}
            </div>
            <div>
              <h4 class="questions" onClick={toggleAnswers}>Can I cancel my subscription</h4>
              {showAnswers && <p className="answers">1</p>}
            </div>
            <div>
              <h4 class="questions" onClick={toggleAnswers}>Do you provide additonal support</h4>
              {showAnswers && <p className="answers">1</p>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
