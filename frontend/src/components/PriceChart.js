import React , {useMemo} from "react";
import Chart from "react-apexcharts";
import '../static/chart.scss'


const PriceChart = ({height, width, sliderValues}) => {
  const [minSlider, maxSlider] = sliderValues;
  console.log(minSlider)
  console.log(maxSlider)
  console.log(" ")

    const series = useMemo(() => [{
        data: [
            {
          x: '1 Series',
          y: [49.5, 61.9],
          fillColor: (minSlider > 61.9 || maxSlider < 49.5) ? '#000000' : '#81C4FF',

          
        },
        {
            x: '2 Series',
            y: [49.3, 74.7],
            fillColor: (minSlider > 74.7 || maxSlider < 49.3) ? '#000000' : '#81C4FF',

          },
        {
          x: '3 Series',
          y: [58.5, 87.8],
          fillColor: (minSlider > 87.8 || maxSlider < 58.5) ? '#000000' : '#81C4FF',

        },
        {
          x: '4 Series',
          y: [67.0, 95.7],
          fillColor: (minSlider > 95.7 || maxSlider < 67.0) ? '#000000' : '#81C4FF',

        },
        {
          x: '5 Series',
          y: [70.1, 138.9],
          fillColor: (minSlider > 138.9 || maxSlider < 70.1) ? '#000000' : '#81C4FF',

        },{
          x: '6 Series',
          y: [87.3, 114.5],
          fillColor: (minSlider > 114.5 || maxSlider < 87.3) ? '#000000' : '#81C4FF',

        },{
          x: '7 Series',
          y: [142.5, 214.0],
          fillColor: (minSlider > 214.0 || maxSlider < 142.5) ? '#000000' : '#81C4FF',

        },{
          x: '8 Series',
          y: [142.5, 148.5],
          fillColor: (minSlider > 148.5 || maxSlider < 142.5) ? '#000000' : '#81C4FF',

        },{
          x: 'X1',
          y: [52.1, 69.5],
          fillColor: (minSlider > 69.5 || maxSlider < 52.1) ? '#000000' : '#16588E',
        },{
          x: 'X2',
          y: [58.7, 70.3],
          fillColor: (minSlider > 70.3 || maxSlider < 58.7) ? '#000000' : '#16588E',

        },{
          x: 'X3',
          y: [69.5, 123.2],
          fillColor: (minSlider > 123.2 || maxSlider < 69.5) ? '#000000' : '#16588E',

        },{
          x: 'X4',
          y: [71.8, 127.5],
          fillColor: (minSlider > 127.5 || maxSlider < 71.8) ? '#000000' : '#16588E',

        },{
          x: 'X5',
          y: [122.1, 183.6],
          fillColor: (minSlider > 183.6 || maxSlider < 122.1) ? '#000000' : '#16588E',

        },{
          x: 'X6',
          y: [125.8, 186.7],
          fillColor: (minSlider > 186.7 || maxSlider < 125.8) ? '#000000' : '#16588E',

        },{
          x: 'X7',
          y: [149.7, 180.8],
          fillColor: (minSlider > 180.8 || maxSlider < 149.7) ? '#000000' : '#16588E',

        },{
          x: 'Z4 Roadster',
          y: [73.3, 97.0],
          fillColor: (minSlider > 97.0 || maxSlider < 73.3) ? '#000000' : '#E7222E',

        },{
          x: 'M2',
          y: [89.9, 99.9],
          fillColor: (minSlider > 99.0 || maxSlider < 89.9) ? '#000000' : '#E7222E',
        },{
          x: 'M3',
          y: [135.3, 146.4],
          fillColor: (minSlider > 146.4 || maxSlider < 135.3) ? '#000000' : '#E7222E',

        },{
          x: 'M4',
          y: [136.4, 150.7],
          fillColor: (minSlider > 150.7 || maxSlider < 136.4) ? '#000000' : '#E7222E',

        },{
          x: 'M5',
          y: [171.0, 192.0],
          fillColor: (minSlider > 171.0 || maxSlider < 192.0) ? '#000000' : '#E7222E',

        },{
          x: 'M8',
          y: [239.7, 245.6],
          fillColor: (minSlider > 245.6 || maxSlider < 239.7) ? '#000000' : '#E7222E',

        },{
          x: 'XM',
          y: [223.3, 236.8],
          fillColor: (minSlider > 236.8 || maxSlider < 223.3) ? '#000000' : '#E7222E',

        }]
    }, [minSlider,maxSlider]])



    const options = {

        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 2,
            columnWidth: '30%',
            barHeight: '70%',
            colors: {
                ranges: [{
                    from: 0,
                    to: 250000,
                    color: 'rgba(47, 116, 212, 0.29)'
                }],
            },
          },

        },
        dataLabels: {
            enabled: false,

        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                },

            },
            yaxis: {
                lines: {
                    show: false
                },
                
            }, 

   
        }
        ,
        xaxis: {
          labels: {
            show:true,
            style: {
              fontSize: '18px',
              fontFamily: 'BMWTypeNext Pro Regular ,Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
            }
          },
        },
        subtitle: {
          text: 'unit (￦1,000,000)',
          align: 'right',
          margin: 10,
          offsetX: 0,
          offsetY: 40,
          floating: false,
          style: {
            fontSize:  '16px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#9699a2'
          },
      }
      ,
      yaxis: {
        labels: {

  
        style: {
            fontSize: '16px',
            fontFamily: 'BMWTypeNext Pro Regular ,Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          }
      }
    }
    }

    
  return (

    
    <div className="price-app">
      <div className="row">
        <div className="mixed-chart">
        <Chart
        type="rangeBar"
        height={height}
        width={width}
        options={options}
        series={series}
      />        </div>
      </div>
    </div>
  );
};

export default PriceChart;