import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuPane() {
  return (
    <div className="menu-pane">
        <nav className="nav">
            <ul className="menu-links">
                <li>
                    <a href="###">Home</a>
                    <span id="DC-info">
                        <p>...is where I want to be, this must be the place</p>
                    </span>
                </li>
                <li><a href="###">Portfolio</a></li>
                <li><a href="###">About</a></li>
                <li><a href="###">Resume</a></li>
                <li><a href="###">Contact</a></li>
            </ul>
        </nav>
  </div>
  );
}

export default MenuPane;
