import React, { useState } from 'react';
import { useContext } from 'react';
import { GameStateContext } from "../helpers/Contexts";
import '../App.css';
import {Questions} from "../helpers/Questions"

function Quiz() {
  const [currQuestion,setCurrQuestion]=useState(0);
  const [optionChosen,setOptionChosen]=useState("");

  const { score,setScore,setGameState } = useContext(GameStateContext);
  const chooseOption=(option)=>{
    setOptionChosen(option)
  }
  const nextQuestion=()=>{
    if (Questions[currQuestion].answer===optionChosen){
      setScore(score+1);
    }
    setCurrQuestion(currQuestion+1);
  }
  const finishQuiz=()=>{
    if (Questions[currQuestion].answer===optionChosen){
      setScore(score+1);
    }
    setGameState('finished');
  }


  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt} </h1>
      <div className="questions">
        <button onClick={()=>{chooseOption('optionA')}}>{Questions[currQuestion].optionA}</button>
        <button onClick={()=>{chooseOption('optionB')}}>{Questions[currQuestion].optionB}</button>
        <button onClick={()=>{chooseOption('optionC')}}>{Questions[currQuestion].optionC}</button>
        <button onClick={()=>{chooseOption('optionD')}}>{Questions[currQuestion].optionD}</button>
      </div>
      {currQuestion===(Questions.length-1)
      ?<button onClick={finishQuiz} id="nextQuestion">Finish Question</button>
      :<button onClick={nextQuestion} id="nextQuestion">Next Question</button>}
    </div>
  )
}

export default Quiz
