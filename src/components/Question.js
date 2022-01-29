import React from 'react'
import {questionList} from '../data/questionList'
let time_id=0
export default function Question({finishQuiz,final_answer,finalScore}){
    const [currentQuestion,setCurrentQuestion]=React.useState(questionList[0])
    //the currentQuestion question stores a particular question.

    //this function gets called whenever we click on any option.
    function active(id){
        console.log('hii')
         setCurrentQuestion((prev)=>{
             return {
                    ...prev,
                    marked:id
             }
         })
    }

    //this function is called whenever next button is clicked or 5 seconds are up
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

    //used to set the timer whenever the question changes.
    React.useEffect(()=>{
         time_id=setInterval(()=>{
             console.log('oops late')
            nextQuestion(currentQuestion.id)
        },4000)
    },[currentQuestion.id])

    //these are just used for styles
let style={
    color:currentQuestion.options[currentQuestion.correctOptionIndex]
}
let active_style={
    backgroundColor:'red',
    color:'blue'
}

    return (
        <div>
            <h3>Question:</h3>
            <h4 style={style}>{currentQuestion.title}</h4>
            {
                currentQuestion.options.map((opt,ind)=>{
                      return (
                          <div className='mt-2 mb-2'>
                      <button style={ind==currentQuestion.marked?active_style:{}} 
                      onClick={()=>{active(ind)}}>
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