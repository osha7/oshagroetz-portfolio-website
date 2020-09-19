import React from 'react';
import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hamburger from './menu/hamburger';
import MenuPane from './menu/menu-pane';

import Home from './home/home';
import Portfolio from '../components/portfolio/portfolio'
import About from '../components/about/about'
import Resume from '../components/resume/resume'
import Contact from '../components/contact/contact'

function App() {
  return (
    <div className="App">
      <input type="checkbox" id="openmenu" className="hamburger-checkbox"/>
        <Hamburger />
      <BrowserRouter>
        <MenuPane />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
