import React from 'react';
import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
