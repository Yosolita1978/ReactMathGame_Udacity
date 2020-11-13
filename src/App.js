import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameLogic from './GameLogic';



class App extends Component {
  
  constructor(props){
  super(props);
	this.handleScore = this.handleScore.bind(this);
    
  this.state = {
  	numQuestions: 0,
  	numCorrect: 0}
  
  }
  
  handleScore(answerWasTrue){
  	let newState = {};
    let ScoreQuestion = this.state.numQuestions;
    let ScoreCorrect = this.state.numCorrect;
    
    if(answerWasTrue === "true"){
      newState ={
      numQuestions: ScoreQuestion + 1,
      numCorrect: ScoreCorrect + 1}
    
    } else{
      newState = {
      numQuestions: ScoreQuestion + 1,
      numCorrect: ScoreCorrect
      }
   }
    //console.log(newState);
	this.updateState(newState);    
      
  }
  
  updateState(newState){
    
    this.setState({
    numQuestions: newState.numQuestions,
    numCorrect: newState.numCorrect})
  
  }
  
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <GameLogic handleScore={this.handleScore}/>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        
      </div>
    );
  }
}

export default App;
