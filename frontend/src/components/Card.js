import React, {useState} from 'react'
import '../static/card.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PopupBox from './PopupBox'
import RadarChart from './RadarChart';
import { Radar } from 'react-chartjs-2';


function Card({keywords, name, won, check,image, icon, pop, type, pop_sub, link, counter, thenew, performance, price, space, fuel, popularity, color, weight, power, fuele, costkm, lwh, legtrunk}) {
    if(counter == 1){
        return(
            
            <div className='card-wrapper' >
                <div className='ranking'>{counter}</div>
                <div className='card-image' style={{backgroundImage: `url(${image})`}}></div>
                <div className='car-name-info'>
                    <div className='car-icon' style={{backgroundImage: `url(${icon})`}}></div>
                </div>
   
                    <div className='car-name'>{check} </div>
                    
                <div className='car-type'>{type}</div>
                <div className='car-price'>₩ {won}</div>
                <div className='button-cluster'>
                    <button className='buy-button'><a href={link} target='__blank' style={{color: 'whitesmoke', textDecoration: 'none'}}>Model Link</a></button>
                   
                    <Popup trigger={  <button className='info-button'>Details</button>} modal contentStyle={{ width: '1150px' }}>
                        <PopupBox icon={icon} color={color} name={name} image={image} pop={pop} pop_sub={pop_sub} thenew={thenew} performance={performance} price={price} fuel={fuel} popularity={popularity} space={space} keywords={keywords} weight={weight} power={power} fuele={fuele} costkm={costkm} lwh={lwh} legtrunk={legtrunk} />
                    </Popup>

                </div>
                <div className='radar-box'>
                    <RadarChart color={color} performance={performance} price={price} space={space} fuel={fuel} popularity={popularity}/>

                </div>




            </div>
        )
    }
    else {

        return(
            
            <div className='card-wrapper'>
                <div className='ranking'>{counter}</div>
                <div className='card-image' style={{backgroundImage: `url(${image})`}}></div>
                <div className='car-name-info'>
                    <div className='rank-icon' ></div>
                    <div className='car-icon' style={{backgroundImage: `url(${icon})`}}></div>

                </div>  
                <div className='car-name'>{check} </div>

                <div className='car-type'>{type}</div>
                <div className='car-price'>₩ {won}</div>

                <div className='button-cluster'>
                    <button className='buy-button'><a href={link} target='__blank' style={{color: 'whitesmoke', textDecoration: 'none'}}>Model Link</a></button>
                   
                    <Popup trigger={  <button className='info-button'>Details</button>} modal contentStyle={{ width: '1050px' }}>
                        <PopupBox icon={icon} color={color} name={name} image={image} pop={pop} pop_sub={pop_sub} thenew={thenew} performance={performance} price={price} space={space} fuel={fuel} popularity={popularity} keywords={keywords} weight={weight} power={power} fuele={fuele} costkm={costkm} lwh={lwh} legtrunk={legtrunk} />
                    </Popup>

                </div>
                <div className='radar-box'>
                    <RadarChart color={color} performance={performance} price={price} space={space} fuel={fuel} popularity={popularity}/>

                </div>




            </div>
        )
    }

}

export default Card