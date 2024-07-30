import React, {useEffect, useState} from 'react'
import '../static/scroll.scss'
import { Fade } from "react-awesome-reveal";
import Answer from './Answer';

function ScrollCard({indicator, num, name, answer, option, updateResponseList, Qnum}) {

    const [buttonValue, setButtonValue] = useState(0);
    let counter = 1;

    

    const AnswerList = [];
    for(let i = 0; i < answer.length; i++){
      AnswerList.push(answer[i]);
    }
    

      // Callback function to receive data from the child
  const updateButton = (e) => {
    setButtonValue(e);
  };
  // console.log(buttonValue);

  return (
    <>
        <Fade duration={2000}>

        <div className='scroll-card-wrapper'>
            <div className='question-progress-indicator' style={{backgroundImage: `url(${indicator})`}}></div>
            <div className='question-num'>{num}</div>
            <div className='question-script'>{name}</div>
            <div className='question-option'>{option}</div>
            <div className='answer-flex'>
            {AnswerList.map((e, key) => {
                    counter++;
                    return ( 
                    <>
                    <Answer 
                    Qnum={Qnum}
                    key={key}
                    answer={e}
                    updateButton={updateButton}
                    updateResponseList={updateResponseList}
                    counter={counter}

                    />
                    </>
        
                    )
                })
            }
        </div>

        </div>
        </Fade>    

    </>

  )
}

export default ScrollCard
