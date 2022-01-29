import React from 'react'
import Question from './components/Question'
import {questionList} from './data/questionList'
let score =0;
let global_finalAnswer=[]
export default function App(){
  const [isQuizStarted,setIsQuizStarted] = React.useState(false)
  const [isQuizFinishsed,setIsQuizFinished] =React.useState(false)
  const [finalAnswer,setFinalAnswer] = React.useState(questionList) 
  /*
  the final answer state stores the entire questions array.
  */

  //this function modifies the finalAnswer vairable after every question is done.
  function final_answer(obj){    
    const modified = finalAnswer.map((que)=>{
      return que.id===obj.id?obj:que
    })
    console.log(modified)
    setFinalAnswer(modified)
     global_finalAnswer=modified
  } 
  
  //This function calulates the score after all questions are done and stores it in local storage.
  function finalScore(){
    for(let i=0;i<global_finalAnswer.length;i++){
      if(global_finalAnswer[i].marked===global_finalAnswer[i].correctOptionIndex){
        score=score+1;
      }
    }
    localStorage.setItem('score',score)
    localStorage.setItem('attempted',1)
  }

  //start and finish functions.
  function startQuiz(){
    setIsQuizStarted(true)
  }
  function finishQuiz(){
    setIsQuizFinished(true)
  }
  return (
    <div className='quiz-container'>
      {
        isQuizStarted?(isQuizFinishsed?<div>Your score is:{score}</div>
          :<Question finishQuiz={finishQuiz}  final_answer={final_answer} finalScore={finalScore}/>)
          :<div className='container m-auto'>
            <p>RULES</p>
            <ul>
              <li>You will be given a coloured text(word) and you have to select the "colour" of the word and not the "word" from the options.</li>
              <li>Remember to click NEXT after you select the option else the answer wont be counted</li>
              <li>Each question has a time limit of 4.5 seconds,so better be quick:))</li>
            </ul>
            <div>Start the quiz now!!!!</div>
            <button className='btn btn-primary' onClick={startQuiz}>Start</button>
          </div>
      }
    </div>
  )
 }