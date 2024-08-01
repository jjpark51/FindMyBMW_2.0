import React from 'react';
import {BrowserRouter, Routes, Route, Router, Switch} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Price from './components/Price';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  return (

    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/price" element={<Price />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        {/* <Route path="/main" element={<Main />} /> */}
      </Routes>
    </React.Fragment>
   
  );
}

export default App;
