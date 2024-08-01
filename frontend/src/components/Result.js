import React, {useEffect, useState} from 'react'
import Card from './Card';
import '../static/result.scss'
import '../static/card.scss'
import {BMWList} from '../assets/models'
import Popup from 'reactjs-popup';
import { Fade } from "react-awesome-reveal";
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import NumChart from "react-apexcharts";
import QNavigation from './QNavigation';
import api from '../API/api';

const marks = [
  {
    value: 30,
    label: '30',
  },
  {
    value: 100,
    label: '100'
  },
  {
    value: 150,
    label: '150'
  },{
    value: 200,
    label: '200'
  },
  {
    value: 250,
    label: '250',
  },
  ];

function valuetext(value) {
    return `${value}`;
  }
  
  const minDistance = 30;
function Result() {

    
    const [value1, setValue1] = React.useState([30, 250]);
    // const radarColor = ['#2B5460', '#458193', '#A1C3CE', '#A1C3CE', '#A1C3CE', '#A1C3CE']
    // const radarColor = ['#002d39','#00546a','#007c9b','#0082a3','#0082a3','#0082a3','#0082a3','#0082a3','#0082a3']
    const radarColor = ['#002d39','#003d51','#00506c','#006287','#0074a2','#0087bd','#009ad9','#00ade4','#00c0ff']



    const handleChange1 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
    };
    // console.log(value1)
    
          
    const series = [{
          name: 'Quantity',
          type: 'area',
          data: [0,16, 20, 8, 6, 7, 5, 3, 1, 2]
        }]
        const options = {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            curve: 'smooth'
          },
          fill: {
            type:'solid',
            opacity: [0.35, 1],
          },
          labels: ['30', '60', '80', '100', '120', '150', '180', '200', '220', '250'],
          markers: {
            size: 0
          },
          yaxis: [
            {
              title: {
                text: 'Quantity',
              },
            },
          ],
          subtitle: {
            text: 'unit (￦1,000,000)',
            align: 'right',
            margin: 10,
            offsetX: 0,
            offsetY: 40,
            floating: false,
            style: {
              fontSize:  '12px',
              fontWeight:  'normal',
              fontFamily:  undefined,
              color:  '#9699a2'
            },
        }
        }
        const [hasLoaded, setHasLoaded] = useState(false);

        const handlePrice = async (close) => {
          const updatedPriceValue = [(value1[0] * 1000), (value1[1] * 1000)];

          try {
            const response = await api.post('/reset', updatedPriceValue)
            console.log("Price is successfully updated", response)
            window.location.reload();

          }
          catch (error){
            console.log(error.resposne)
          }

            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            setHasLoaded(!hasLoaded)
            close();


        
        
        }
    let counter = 0;
    const [value, setValue] = useState({min: 0, max: 100});

    const [data, setData] = useState([])
    const [recommendFilter, setRecommendFilter] = useState([]);

    useEffect(() => {
      if (!hasLoaded) {
        api.get('/data')
          .then((response) => {
            setData(response.data);
            console.log(response);
            setHasLoaded(true);
          })
          .catch((error) => {
            console.error('Error: ', error);
          });
      }
    }, [hasLoaded]);

    useEffect(() => {
      if (data.length > 0) {

        setRecommendFilter(data);
        console.log(recommendFilter)
      
      }
    }, [data]);

    const scrollDown = () => {
      window.scrollTo({top: 750, left: 0, behavior: 'smooth'});
  }
    window.onscroll = function() {
      var scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollIndicator.style.opacity = '0';
        } else {
          scrollIndicator.style.opacity = '1';
        }
      }
    };


        return(

                <div className='result-body'>
                  <Fade duration={4000} triggerOnce='true'>
                    <QNavigation />
                    <div className='line-divide'></div>
                    <div className='wrapper'>

                        <div className='big-recommend'>Here are the best BMWs for you!</div>
                        <div className='small-recommend'>Based on your taste and lifestyle</div>
                        {/* <RangeBar min={0} max={100} step={5} value={value} onChange={setValue}/> */}
                        <Popup trigger={
                            <button className='reset-price'>Reset Price</button>
                        } modal>
                            {(close) => (
                            <div style={{ height: '500px', margin: '0', padding: '0'}}>
        <h1 style={{position: 'relative', left: '380px', top: '10px' , fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif"}}>Budget Range</h1>
        <p style={{position: 'relative', left: '370px', top: '10px' , fontFamily: "BMWTypeNext Pro Regular,Arial,Helvetica,Roboto,sans-serif"}}>Number of models per price point</p>

        <div id="chart">
        <NumChart options={options} series={series} type="line" width={800} height={250} style={{position: 'relative', left:'70px'}} />
        </div>
          <Box sx={{ width: 740 , position: 'relative' , top: '10px', left: '125px'}}> 
                        <Slider
                            getAriaLabel={() => 'Minimum distance'}
                            aria-label="Custom marks"
                            marks={marks}
                            value={value1}
                            min={30}
                            max={250}
                            step={5}
                            onChange={handleChange1}
                            getAriaValueText={valuetext}
                            disableSwap
                            valueLabelDisplay="auto"
                            sx={{
                                '& .MuiSlider-valueLabel': {
                                  lineHeight: 1.2,
                                  fontSize: 12,
                                  background: 'unset',
                                  padding: 0,
                                  width: 52,
                                  height: 52,
                                  borderRadius: '50% 50% 50% 0',
                                  backgroundColor: '#3880ff',
                                  transformOrigin: 'bottom left',
                                  transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                                  '&:before': { display: 'none' },
                                  '&.MuiSlider-valueLabelOpen': {
                                    transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                                  },
                                  '& > *': {
                                    transform: 'rotate(45deg)',
                                  },
                                }
                              }}
                            />
                        </Box>
                        <button style={{border: '1px solid black', borderRadius: '8px', height: '30px', width: '100px', backgroundColor: 'white', position: 'relative', top: '40px', left: '420px', cursor: 'pointer'}} onClick={() => handlePrice(close)}  >Apply</button>
                    </div>
                                        )}
                                        {/* <PricePopUp min={0} max={100} step={5} value={value} onChange={setValue}/> */}
                                    </Popup>
                        
                                    {/* <Fade duration={3000}> */}

                        <div className='card-box'>{
                          recommendFilter.map((e, key) => {
                            console.log(e.radarWon)

                            counter = counter + 1;
                            return ( <Card 
                                counter={counter}
                                check={e.popname}
                                key={key}
                                name={e.model}
                                image={e.image}
                                pop={e.popimage}
                                type={e.radarType}
                                icon={e.icon}
                                // pop_sub={e.popsub}
                                link={e.link}
                                performance={e.radarPerformance}
                                price={e.radarPrice}
                                space={e.radarSpace}
                                fuel={e.radarFuel}
                                popularity={e.radarPopularity}
                                won={e.radarWon}
                                weight={e.radarWeight}
                                power={e.radarPower}
                                fuele={e.radarFuele}
                                costkm={e.radarCostkm}
                                lwh={e.lwh}
                                legtrunk={e.radarLegtrunk}
                                color={radarColor[counter - 1]}
                                keywords={e.radarKeywords} />)
                        })}
                        </div>
                    </div>

                    <div className='scroll-indicator' onClick={scrollDown}>
                      <div className='elementor-button-text'></div>
                      <a>Scroll</a>
                  </div>
                            </Fade>
                      </div>
        )

}

export default Result