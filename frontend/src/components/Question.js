import React, {useState} from 'react'
import QNavigation from './QNavigation'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import { QList } from '../assets/question'
import '../static/scroll.scss'
import ScrollCard from './ScrollCard'
import { Link, useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import DragCard from './DragCard'
import api from '../API/api'

function Question() {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const ResponseList =  [[0,0,0,0,0],[0,0,0,0], [0,0,0,0],[0,0,0,0,0],[0,0,0,0],[0,0,0,0,0,0,0]]
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
             console.log(ResponseList)
    }
    const handleResult = async (e) => {
        e.preventDefault();
        try {
            console.log(ResponseList)
          const token = localStorage.getItem('token');
          console.log('Token being used:', token);
          const response = await api.post('/process', ResponseList);
          console.log("Request was sent successfully", response.data);
          navigate('/result'); // Navigate to the /question route
        } catch (error) {
          console.log("Request failed!", error.response?.data || error.message);
          console.log("Full error object:", error);
        }
      };
    const res = QList.slice(1,7).map(e => e);

  return (
    <>
      <QNavigation />
      <div className='scroll-body'>
      <Fade duration={2000}>

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
        </Fade>
                <Fade duration={2000}>
        <div className='scroll-indicator' onClick={scrollDown}>
            <div className='elementor-button-text'></div>
                <a>Scroll</a>
        </div>
        </Fade>

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
                <Link to={'/result'}><button onClick={handleResult} className='next-button'>Finish</button></Link>

            </div>



      </div>
    </>
  )
}

export default Question
