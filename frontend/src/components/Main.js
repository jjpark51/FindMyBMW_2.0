import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import { useHistory } from 'react-router-dom';

import '../static/main.scss'
import { Fade } from 'react-awesome-reveal';

function Main() {
    const images = [
            'https://d1jvv63fd9y16z.cloudfront.net/feature/jinsuk/image/main_2.jpg'
            ,'https://d1jvv63fd9y16z.cloudfront.net/feature/jinsuk/image/main_3.png'    
            ,'https://d1jvv63fd9y16z.cloudfront.net/feature/jinsuk/image/main_4.png'
            // ,'https://d1jvv63fd9y16z.cloudfront.net/feature/jinsuk/image/price_back.png'
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    // const selectedPicture = images[randomIndex];
    
    const screenWidth = window.innerWidth;
    console.log(screenWidth)
    const mobileImage = 'https://d1jvv63fd9y16z.cloudfront.net/feature/jinsuk/image/main_4.png'

    const selectedPicture = screenWidth <= 760 ? mobileImage : images[randomIndex]
    const redirectTo = screenWidth <= 760 ? '/mobilePrice' : '/price'
    console.log(redirectTo)

    return (
        <>
        <div className='main-background' style={{backgroundImage: `url(${selectedPicture})`}}>
        <Fade duration={2000}>

            <Navigation />
            <div className='line-divide'></div>
            <p className='sheer-drive'>Sheer Driving Pleasure</p>
            <div className='content-wrapper'>
                    <div className='small-title'>
                        <a>Find the best BMW for you</a>
                    </div>
                    <div className='big-title'>
                        <h1>Find My BMW</h1>
                    </div>
                    <Link to={`${redirectTo}`}>
                        <div className='start-button'>
                            <a className='start-font'>Start</a>
                        </div>
                    </Link>
            </div>
        </Fade>
        </div>
    </>

       
    )
}

export default Main