import React from 'react'
import Question from './components/Question'
const questionList = require('./data/questionList')
let score =0;
let global_finalAnswer=[]
export default function App(){
  const [isQuizStarted,setIsQuizStarted] = React.useState(false)
  const [isQuizFinishsed,setIsQuizFinished] =React.useState(false)
  const [finalAnswer,setFinalAnswer] = React.useState(questionList)

  //this function modifies the finalAnswer vairable after every question is done.
  function final_answer(obj){    
    const modified = finalAnswer.map((que)=>{
      return que.id===obj.id?obj:que
    })
    console.log(modified)
    setFinalAnswer(modified)
     global_finalAnswer=modified
  } 
  
  function finalScore(){
    for(let i=0;i<global_finalAnswer.length;i++){
      if(global_finalAnswer[i].marked===global_finalAnswer[i].correctOptionIndex){
        score=score+1;
      }
    }
  }

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
            <div>Start the quiz now!!!!</div>
            <button className='btn btn-primary' onClick={startQuiz}>Start</button>
          </div>
      }
    </div>
  )
 }