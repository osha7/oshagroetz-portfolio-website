import React from 'react';

import Hamburger from '../menu/hamburger'
import MenuPane from '../menu/menu-pane'
import HomeBody from './home-body'

function Home() {
  return (
    <div className="menu-container">
        <input type="checkbox" id="openmenu" className="hamburger-checkbox"/>
        <Hamburger />
        <MenuPane />
        <HomeBody />
    </div>
  );
}

export default Home;
