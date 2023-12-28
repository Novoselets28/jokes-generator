import React from 'react';

import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import Locations from './components/Location';

const App = () => {
  return (
    <div>
      <Header/>
      <Meme/>
      <Locations/>
    </div>
  );
};

export default App;
