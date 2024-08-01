import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import QNavigation from './QNavigation';
import '../static/price.scss'
import PriceChart from './PriceChart';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Fade } from "react-awesome-reveal";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import api from '../API/api';

const units = ['₩'];

const marks = [
  { value: 40, label: '40' },
  { value: 60, label: '60' },
  { value: 80, label: '80' },
  { value: 100, label: '100' },
  { value: 120, label: '120' },
  { value: 140, label: '140' },
  { value: 160, label: '160' },
  { value: 180, label: '180' },
  { value: 200, label: '200' },
  { value: 220, label: '220' },
  { value: 240, label: '240' },
  { value: 260, label: '260' },

];

function valuetext(value) {
  return `${value}₩`;
}

const minDistance = 40;

function Price() {
  const [value1, setValue1] = useState([40, 260]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    let updatedValue;
    if (activeThumb === 0) {
      updatedValue = [Math.min(newValue[0], value1[1] - minDistance), value1[1]];
    } else {
      updatedValue = [value1[0], Math.max(newValue[1], value1[0] + minDistance)];
    }

    setValue1(updatedValue);
  };

  const handlePrice = async (e) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Please log in.');
      // Redirect to login page or show login modal
      return;
    }
  
    const updatedPriceValue = [value1[0] * 1000, value1[1] * 1000];
    try {
      const response = await api.post('/price', updatedPriceValue);
      console.log('Price range set successfully:', response.data);
      navigate('/question'); // Navigate to the /question route

    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Unauthorized. Token might be invalid or expired.');
        // Handle token expiration, e.g., redirect to login
      } else {
        console.error('Failed to send price', error.response?.data || error.message);
      }
    } 
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };
  return (
    <>
      <QNavigation />
      <div className='price-body'>
        <div className='line-divide'></div>
        <div className='bmw-logo'></div>
        <div className="price-flex" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
            <li style={{ margin: '0 10px', fontWeight: 'bold' }}>Price</li>
            <li style={{ margin: '0 10px' }}><ArrowForwardIosIcon /></li>
            <li style={{ margin: '0 10px' }}>Questions</li>
            <li style={{ margin: '0 10px' }}><ArrowForwardIosIcon /></li>
            <li style={{ margin: '0 10px' }}>Result</li>
          </ul>
        </div>
        <Link to={'/main'} style={{color: '#666', textDecoration: 'none'}}><button className='next-page' onClick={handlePrice}>Next</button></Link>


        <div style={{ width: '953.6533155441284', margin: 'auto' }}>
          <Box sx={{ 
            width: 953,
            position: 'relative', 
            margin: 'auto',
            left:'6%',
            bottom: '7%'
          }}> 
            <Slider
              getAriaLabel={() => 'Minimum distance'}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="on"
              getAriaValueText={valuetext}
              disableSwap
              marks={marks}
              min={40}
              max={260}
              step={5}
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

          <div className='wrapper' style={{ position: 'relative', width: 1100, height: 450 }}>
          <PriceChart height={450} width={1100} sliderValues={value1} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Price