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
                clearInterval(time_id)
            final_answer(currentQuestion)
            finalScore()
            finishQuiz()
          }else{
               clearInterval(time_id)
            final_answer(currentQuestion)
            setCurrentQuestion(questionList[id+1])
        }    
    }

    React.useEffect(()=>{
         time_id=setInterval(()=>{
             console.log('oops late')
            nextQuestion(currentQuestion.id)
        },3000)
    },[currentQuestion.id])

let style={
    color:currentQuestion.options[currentQuestion.correctOptionIndex]
}
    return (
        <div>
            <h3>Question:</h3>
            <h4 style={style}>{currentQuestion.title}</h4>
            {
                currentQuestion.options.map((opt,ind)=>{
                      return (
                          <div className='mt-2 mb-2'>
                      <button className={ind==currentQuestion.marked?'active':'passive'} 
                      onClick={(event)=>{active(event,ind)}}>
                        --{opt} </button>
                      </div>)
                })
            }
            <div>
                <button className='btn btn-success btn-block' onClick={(event)=>{
                    nextQuestion(currentQuestion.id)}}>Next!</button>
            </div>
        </div>
    )
}