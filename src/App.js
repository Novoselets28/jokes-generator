import React from 'react';

import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import Location from './components/Location';

const App = () => {
  return (
    <div>
      <Header/>
      <Meme/>
      <Location/>
    </div>
  );
};

export default App;
