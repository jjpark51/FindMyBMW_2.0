import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../static/qnavigation.scss'


function QNavigation() {

    return (
        <div className='qnavbar'>
            <div className='leftside'>
            <Link to={'/'} className='qbmw-icon' ></Link>
                <div className='bmw-conf-li'><a  href="https://www.bmw.co.kr/ko/index.html"  target='_blank' style={{color: '#666666', textDecoration: 'none', fontSize: '12pt'}}>BMW</a></div>
                <div className='bmw-drive-li'><a href="https://driving-center.bmw.co.kr/" target='_blank' style={{color: '#666666', textDecoration: 'none', fontSize: '12pt'}}>BMW Driving Center</a></div>
            </div>
            <ul className='rightside'>
                
            </ul>
        </div>
    )
}

export default QNavigation