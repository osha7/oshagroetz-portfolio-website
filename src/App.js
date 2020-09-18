import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="menu-container">
        <input type="checkbox" id="openmenu" className="hamburger-checkbox"/>
        <div className="hamburger-icon">
          <label htmlFor="openmenu" id="hamburger-label">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </label>    
        </div>

        <div className="menu-pane">
          <nav className="nav">
          <ul className="menu-links">
              <li>
                <a href="###">Portfolio</a>
                <span id="DC-info">
                  <p>Development Projects</p>
                </span>
              </li>

              <li><a href="###">About</a></li>
              <li><a href="###">Resume</a></li>
              <li><a href="###">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="body-text">
          <h1>Osha Groetz</h1>
          <h2>Software Engineer</h2>
          <p>Fall 2020</p>
        </div>
        <div className="osha-pic">
        <img src={'https://res.cloudinary.com/djsz02nwd/image/upload/v1600472255/Asset_2_qwg54d.png'} alt="oshag" className="img-responsive"/>
        </div>
      </div>
    </div>
  );
}

export default App;
