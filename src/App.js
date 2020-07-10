import React from 'react';
import './App.css';
import Language from './parts/language';
import Logo from './parts/logo';
import Phrasing from './parts/phrasing';
import Main from './parts/main';

const App = () => {
  return (
  <div className='container'>

    <Language/>
    <Logo/>
    <Phrasing/>
    <Main/>

  </div>
  
  );
}

export default App;
