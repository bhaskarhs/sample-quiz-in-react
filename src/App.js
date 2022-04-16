import React, { useState } from 'react'
import QuestionsDisplay from './QuestionsDisplay'
import './App.css'

const qBank = [
  {
    question:
    "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: 1
  },
  {
    question:
    "what is the value of ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: 2
  },
  {
    question:
    "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "vinayak",
    questionId: 3
  },
  {
    question:
    "how build the app ?",
    answers: ["vinayak", "sarthak", "somil", "devesh"],
    correct: "somil",
    questionId: 4
  },
]  
export default function App() {
  const [current,nextstate]=useState(1)
  const [total_score,setScore] = useState(0)
  // console.log(current);
  const handlenext = () => {
    nextstate(current+1)
  }
 
  const tosetScore = () => {
    setScore(total_score+1) 
  }

  return (
    <>
    <p>total score {total_score}/{qBank.length}</p>
    {qBank.length >= current ?  qBank.map((question,index) => 
      
        <p className={current === question.questionId ? "":"todisplay" } >
          <QuestionsDisplay 
          question={question.question}
          answers={question.answers}
          correctans={question.correct}
          qid={question.questionId}
          tosetScore={() => tosetScore()}
          handlenext={() => handlenext()}
          />
        </p>
      
      ) : "no question"}
    
     {current-1 !== 0 ?  <button >previous question</button> : ""  }
     {current!==qBank.length ? <button onClick={() =>{handlenext()}}>next</button> :""} 
    </> 
  )
}
