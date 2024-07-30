import React, {useEffect, useState} from 'react'
import '../static/scroll_drag.scss'

function Answer({answer , ResponseList, updateResponseList, counter, Qnum}) {

    

    
    const [disabled, setDisabled] = useState(false);
    const [dataToSend, setDataToSend] = useState(0);


    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
      updateResponseList( Qnum, counter - 1)
    }


  return (
    <>
      
      <button className='question-answer' onClick={handleClick} style={{ backgroundColor: active ? "#ADD8E6" : "rgb(210, 210, 210) " , color: active ? "#00308F": "black", border: active? "3px solid #00308F" :  "3px solid black" }}><a>{answer}</a></button>
    </>
  )
}

export default Answer