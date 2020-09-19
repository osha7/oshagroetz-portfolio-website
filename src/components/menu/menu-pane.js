import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const MenuPane = () => {
    return (
        <div className="menu-pane">
            <nav className="nav">
                <ul className="menu-links">
                    <li><Link to="/" exact >Home</Link>
                    <span id="DC-info">
                        <p>...is where I want to be, this must be the place</p>
                    </span></li>
                    <li><Link to="/portfolio" exact >Portfolio</Link></li>
                    <li><Link to="/about" exact >About</Link></li>
                    <li><Link to="/resume" exact >Resume</Link></li>
                    <li><Link to="/contact" exact >Contact</Link></li>
                    {/* NavLink would be used instead if using 'active styling' */}
                </ul>
            </nav>
        </div>
    );
  };
  
  export default MenuPane;