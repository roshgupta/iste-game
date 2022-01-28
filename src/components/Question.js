import React from 'react'
const questionList= require('../data/questionList')
export default function Question({finishQuiz,final_answer,finalScore}){
    const [currentQuestion,setCurrentQuestion]=React.useState(questionList[0])
    console.log(currentQuestion)
    function active(event,id){
         setCurrentQuestion((prev)=>{
             return {
                    ...prev,
                    marked:id
             }
         })
    }

    function nextQuestion(event,id){
          if(id+1===questionList.length){
            final_answer(currentQuestion)
            finalScore()
            finishQuiz()
          }else{
            final_answer(currentQuestion)
            setCurrentQuestion(questionList[id+1])
        }    
    }
    return (
        <div>
            <h3>Question:</h3>
            <h4>{currentQuestion.title}</h4>
            {
                currentQuestion.options.map((opt,ind)=>{
                      return (
                          <div>
                      <button className={ind==currentQuestion.marked?'active':'passive'} 
                      onClick={(event)=>{active(event,ind)}}>
                        --{opt} </button>
                      </div>)
                })
            }
            <div>
                <button onClick={(event)=>{
                    nextQuestion(event,currentQuestion.id)}}>Next!</button>
            </div>
        </div>
    )
}