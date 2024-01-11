import React, { useState } from 'react'
import questions from "../resources/quizQuestion.json"

export default function Mainpage() {
  const[count,setCount]=useState(0)
  function handle(){
    if(count==0){
      setCount(questions.length-1)
    }else{
      setCount(count-1)
    }
  }
  function next(){
    if(count==questions.length-1){
      setCount(0)
    }else{
      setCount(count+1)
    } 
  }
  function prev(){
    alert("to what to quit the game")
    window.location.reload();

  }
  return (
    <div className='Div'>
        <div>
            <p>Question</p>
            <p className='number'>{count+1}of15</p>
            <p className='para'>{questions[count].question}</p>
            <div className='options'>
            <div className='op1'>
            <div className='ops' id='op'>
              <p>{questions[count].optionA}</p>
            </div>
            <div className='ops' id='op'>
              <p>{questions[count].optionB}</p>
            </div>
            </div>
            <div className='op1'> 
            <div className='ops' id='op'>
              <p>{questions[count].optionC}</p>
            </div>
            <div className='ops'  id='op'>
              <p>{questions[count].optionD}</p>
            </div>
            </div>
            </div>
            <div className='bts'>
              <button className='bt1' onClick={handle}>previous</button>
              <button className='bt2' onClick={next}>Next</button>
              <button className='bt3'onClick={prev}>Quit</button>
            </div>
        </div>
    </div>
  )
}