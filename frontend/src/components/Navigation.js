import React from 'react';
import { Link } from 'react-router-dom';
import '../static/navigation.scss';

const navItems = [
  { text: 'BMW', url: 'https://www.bmw.co.kr/ko/index.html', className: 'bmw-conf-li' },
  { text: 'MINI', url: 'https://www.mini.co.kr/ko_KR/home.html', className: 'mini-conf-li' },
  { text: 'BMW Driving Center', url: 'https://driving-center.bmw.co.kr/', className: 'bmw-drive-li' }
];

function Navigation() {
  return (
    <nav className='navbar'>
      <div className='leftside'>
        <Link to='/' className='bmw-icon' aria-label="BMW Home"></Link>
        <Link to='/' className='mini-icon' aria-label="MINI Home"></Link>
        {navItems.map((item, index) => (
          <div key={index} className={item.className}>
            <a href={item.url} target='_blank' rel="noopener noreferrer">{item.text}</a>
          </div>
        ))}
      </div>
      <ul className='rightside'>
        {/* Add right side menu items here */}
      </ul>
    </nav>
  );
}

export default Navigation;