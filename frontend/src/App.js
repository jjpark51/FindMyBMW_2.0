import React from 'react';
import {BrowserRouter, Routes, Route, Router, Switch} from 'react-router-dom';
import Login from './components/Login';
import Navigation from './components/Navigation';

function App() {
  return (

    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/main" element={<Main />} /> */}
      </Routes>
    </React.Fragment>
   
  );
}

export default App;
