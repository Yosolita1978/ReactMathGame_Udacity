import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameLogic from './GameLogic';



class App extends Component {
  
  constructor(props){
  super(props);
  this.state = {
  	numQuestions: 0,
  	numCorrect: 0}
  
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <GameLogic />
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        
      </div>
    );
  }
}

export default App;
