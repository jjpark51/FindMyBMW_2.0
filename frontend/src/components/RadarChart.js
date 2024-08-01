import React from "react";
import Chart from "react-apexcharts";
import '../static/chart.scss'

const RadarChart = (e) =>{

    console.log(e.color)

    const series =  [{
        name: 'Series 1',
        data: [e.performance, e.price ,e.fuel, e.popularity, e.space]
    }
]
    const options = {
        plotOptions: {
            radar: {
                polygons: {
                    strokeWidth: 0,
                    
                    fill: {
                        colors: ['#F5F5F5','#F5F5F5', '#D4D4D4','#D4D4D4']
                    }
                },

            }
        },

        chart: {
            height: 400,
            type: 'radar',
            toolbar: {
                show: false
            },
          },
          title: {
            text: ' '
          },
          xaxis: {
            labels: {
              show: true,
              style: {
                fontSize: '12px',
                fontFamily: 'BMWTypeNext Pro Regular',
                
              }
            },
            categories: ['Performance', 'Price', 'Fuel Economy', 'Sales Volume', 'Space']
          },
        yaxis: {
            show: false,
            max: 1,
            min: 0
        },
        stroke: {
            show: true,
            width: 0,
            // colors: ['#A6DB37']
            opacity: 0.63,
            colors: [e.color]
        },
        markers: {
            size: 0,
        },
        fill: {
            opacity: 0.63,
            colors: [e.color],
            // colors: ['#A6DB37'],
          }
        
    }

    return(
        <div className="radar-app">
            <div className="row">
                <div className="mixed-chart">
                <Chart
                type="radar"
                height={280}
                options={options}
                series={series}
            />        </div>
            </div>
        </div>
    );
};

export default RadarChart;