import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProtectedLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('token'); // Or however you're storing the auth state
    if (isLoggedIn) {
      navigate(to);
    } else {
      // Redirect to login page or show a message
      navigate('/');
      // Optionally, you could also show a message to the user
      // alert('Please log in to access this page');
    }
  };

  return <Link to={to} onClick={handleClick}>{children}</Link>;
};

export default ProtectedLink;