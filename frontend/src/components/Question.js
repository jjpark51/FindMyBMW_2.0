import React, {useState} from 'react'
import QNavigation from './QNavigation'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import { QList } from '../assets/question'
import '../static/scroll.scss'
import ScrollCard from './ScrollCard'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import DragCard from './DragCard'

function Question() {

    const ResponseList =  [[0,0,0,0,0],[0,0,0,0,0], [0,0,0,0],[0,0,0,0,0],[0,0,0,0],[0,0,0,0,0,0,0]]
    const [recommendData, setRecommendData] = useState([])
    const initIndicator = QList[0].indicator;
    const initNum = QList[0].num;
    const initName = QList[0].name;
    const initOption = QList[0].option;
    const initAnswer = QList[0].answer;
    const handleClick = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    const scrollDown = () => {
        window.scrollTo({top: 750, left: 0, behavior: 'smooth'});
    }

    const updateResponseList = (qNum, data, index) => {
        if(index != null) {
            if(index == 0) {
                if(ResponseList[qNum - 1][data - 1] == 0) {
                    ResponseList[qNum - 1][data - 1] = 5;
                }
                else {
                    ResponseList[qNum - 1][data - 1] = 0
                }
            }

            if(index == 1) {
                if(ResponseList[qNum - 1][data - 1] == 0) {
                    ResponseList[qNum - 1][data - 1] = 4
                }
                else {
                    ResponseList[qNum - 1][data - 1] = 0
                }
            }
            if(index == 2) {
                if(ResponseList[qNum - 1][data - 1] == 0) {
                    ResponseList[qNum - 1][data - 1] = 3
                }
                else {
                    ResponseList[qNum - 1][data - 1] = 0
                }
            }
        }
        else {
            if(ResponseList[qNum -1][data - 1] == 1){
                ResponseList[qNum - 1][data - 1] = 0;
            }
            else{
                ResponseList[qNum - 1][data - 1] = 1;
            }
        }
    }
    const handleResult = () => {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'Accept': "application/json"
        },
            body: JSON.stringify(ResponseList)
          };
        // console.log(ResponseList)
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        fetch('http://localhost:8080/api/test', requestOptions)
        // fetch('/api/test', requestOptions)
        .then(response => response.json())
        .then(data => {
            // console.log(ResponseList)
            setRecommendData(data)
            // console.log(data);
            // window.location.reload();

        })
        .catch(err => console.log(err))
       

    }
    const res = QList.slice(1,7).map(e => e);

  return (
    <>
      <QNavigation />
      <div className='scroll-body'>
        <DndProvider backend={HTML5Backend}>
                                <DragCard 
                            indicator={initIndicator}
                            num={initNum}
                            name={initName}
                            answer={initAnswer}
                            option={initOption}
                            updateResponseList={updateResponseList}
                            Qnum={1}
                            />
                </DndProvider>
        <div className='scroll-indicator' onClick={scrollDown}>
            <div className='elementor-button-text'></div>
                <a>Scroll</a>
        </div>

        {
                res.map((e, key) => {
                    return (
                        <>
                        <ScrollCard 
                        key={key}
                        indicator={e.indicator}
                        num={e.num}
                        name={e.name}
                        answer={e.answer}
                        option={e.option}
                        updateResponseList={updateResponseList}
                        Qnum={e.Qnum}
                        />
                    </>
                    )
                })
            }

            <div className='page-buttons-wrapper'>
                <Link to={'/price'}><button onClick={handleClick} className='prev-button'>Previous</button></Link>
                <Link to={'/loading'}><button onClick={handleResult} className='next-button'>Finish</button></Link>

            </div>



      </div>
    </>
  )
}

export default Question
