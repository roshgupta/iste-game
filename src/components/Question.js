import React from 'react'
const questionList= require('../data/questionList')
let time_id=0
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

    function nextQuestion(id){
          if(id+1===questionList.length){
               // clearTimeout(time_id)
            final_answer(currentQuestion)
            finalScore()
            finishQuiz()
          }else{
               // clearTimeout(time_id)
            final_answer(currentQuestion)
            setCurrentQuestion(questionList[id+1])
        }    
    }
/*
    React.useEffect(()=>{
         time_id=setTimeout(()=>{
             console.log('oops late')
            nextQuestion(currentQuestion.id)
        },5000)
    },[currentQuestion.id])
*/
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
                    nextQuestion(currentQuestion.id)}}>Next!</button>
            </div>
        </div>
    )
}