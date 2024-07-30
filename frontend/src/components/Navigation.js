import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProtectedLink from './ProtectedLink';
import '../static/navigation.scss';

const navItems = [
  { text: 'BMW', url: 'https://www.bmw.co.kr/ko/index.html', className: 'bmw-conf-li' },
  { text: 'BMW Driving Center', url: 'https://driving-center.bmw.co.kr/', className: 'bmw-drive-li' }
];

function Navigation() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Optionally, you might want to clear other user-related data from localStorage
    // localStorage.clear(); // Use this if you want to clear all localStorage data
    navigate('/'); // Redirect to home page or login page after logout
  };

  return (
    <nav className='navbar'>
      <div className='leftside'>
        <ProtectedLink to='/main'>
          <div className='bmw-icon' aria-label="BMW Home"></div>
        </ProtectedLink>
        {navItems.map((item, index) => (
          <div key={index} className={item.className}>
            <a href={item.url} target='_blank' rel="noopener noreferrer">{item.text}</a>
          </div>
        ))}
      </div>
      <ul className='rightside'>
        {isLoggedIn && (
          <li>
            <button onClick={handleLogout} className="logout-button"><a>Logout</a></button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;