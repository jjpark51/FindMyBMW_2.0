import React, {useState} from 'react'
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import NumChart from "react-apexcharts";
import api from '../API/api';

const marks = [
    {
      value: 30000,
      label: '₩30,000',
    },
    {
      value: 250000,
      label: '₩250,000',
    },
  ];

function valuetext(value) {
    return `${value}`;
  }
  
  const minDistance = 40;
function PricePopUp({min, max, step, value, onChange}) {

    const [value1, setValue1] = useState([30, 250]);
    const [resetValue, setResetValue] = useState([0, 0]);


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
    console.log(value1)
    
          
    const series = [{
          name: 'TEAM A',
          type: 'area',
          data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
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
          labels: ['0'],
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
        //   tooltip: {
        //     shared: true,
        //     intersect: false,
        //     y: {
        //       formatter: function (y) {
        //         if(typeof y !== "undefined") {
        //           return  y.toFixed(0) + " points";
        //         }
        //         return y;
        //       }
        //     }
        //   }
        }
        const handlePrice = async (e) => {
          e.preventDefault();
          setResetValue([(value1[0]* 1000), (value1[1]* 1000)])

          try {
            const response = await api.post('/reset', resetValue)
            console.log('Price is successfully updated', response.data)
            
          }
          catch(error ){
            console.log(error.response)

          }
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        
        }



  return (
    <div style={{ height: '500px', margin: '0', padding: '0'}}>
    <h1 style={{position: 'relative', left: '620px', top: '10px'}}>Budget Range</h1>
    <div id="chart">
    <NumChart options={options} series={series} type="line" width={800} height={250} style={{position: 'relative', left:'70px'}} />
    </div>
       <Box sx={{ width: 700 , position: 'relative' , top: '10px', left: '135px'}}> 
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        aria-label="Custom marks"
                        marks={marks}
                        value={value1}
                        min={30}
                        max={250}
                        step={10}
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
        <button style={{border: '1px solid black', borderRadius: '8px', height: '30px', width: '100px', backgroundColor: 'white', position: 'relative', top: '40px', left: '420px', cursor: 'pointer'}} onClick={handlePrice} >Apply</button>
    </div>
    
  )
}

export default PricePopUp