import React, { Component } from 'react';


class GameLogic extends Component{
  
  constructor(props){
    super(props);
    const numbers = this.MakeNumVariables();
    this.checkAnswerUser = this.checkAnswerUser.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
    	Xvalue: numbers[0],
    	Yvalue: numbers[1],
    	Zvalue: numbers[2],
    	Answer: numbers[3]
    };
  }
  
  MakeNumVariables(){
    var XNumber = Math.floor(Math.random() * 100);
    var YNumber = Math.floor(Math.random() * 100);
    var ZNumber = Math.floor(Math.random() * 100);
    var Answer = Math.floor(Math.random() * 3) + (XNumber + YNumber + ZNumber);
    var variables = [XNumber, YNumber, ZNumber, Answer];
    return variables;
   }
  
  checkAnswerUser(response){
  	const userClick = response.target.innerText;
    const correctAnswer = this.checkAnswerMath();
    this.updateState(userClick);
    let result = userClick === correctAnswer ? "true" : "false";
    //console.log(result);
    this.props.handleScore(result);
  }
  
  updateState(userClick){
    
    const newNumbers = this.MakeNumVariables();
    this.setState({
    Xvalue: newNumbers[0],
    Yvalue: newNumbers[1],
    Zvalue: newNumbers[2],
    Answer: newNumbers[3]})
    
  }
  
  
  checkAnswerMath(){
    const XNumber = this.state.Xvalue;
    const YNumber = this.state.Yvalue;
    const ZNumber = this.state.Zvalue;
    const Answer = this.state.Answer;
    const CorrectAnswer = (XNumber + YNumber + ZNumber);
    let result = CorrectAnswer === Answer ? "True" : "False";
    return result;
  }
  
  
  render(){
    const XNumber = this.state.Xvalue;
    const YNumber = this.state.Yvalue;
    const ZNumber = this.state.Zvalue;
    const Answer = this.state.Answer;
    
    return(
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
        <p className="text">{`${XNumber} + ${YNumber} + ${ZNumber} = ${Answer}`}</p>
		</div>
     	<button onClick={this.checkAnswerUser}>True</button>
        <button onClick={this.checkAnswerUser}>False</button>
  	</div>
		);
    }
  
  }


export default GameLogic;