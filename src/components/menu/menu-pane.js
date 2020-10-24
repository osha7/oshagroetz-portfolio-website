import React from 'react';
import { Link } from 'react-router-dom';

class MenuPane extends React.Component {

    handleOnClick = () => {
        document.getElementById("openmenu").checked = !document.getElementById("openmenu").checked
          }

          
    render() {
    return (
        <div id="menu-pane" className="menu-pane">
            <nav className="nav">
                <ul className="menu-links">
                    <li><Link to="/" onClick={this.handleOnClick} >Home</Link>
                    <span id="DC-info">
                        <p>...is where I want to be, this must be the place</p>
                    </span></li>
                    <li><Link to="/portfolio" onClick={this.handleOnClick} >Portfolio</Link></li>
                    <li><Link to="/blog" onClick={this.handleOnClick} >Blog</Link></li>
                    <li><Link to="/about" onClick={this.handleOnClick} >About</Link></li>
                    <li><Link to="/resume" onClick={this.handleOnClick} >Resume</Link></li>
                    <li><Link to="/contact" onClick={this.handleOnClick} >Contact</Link></li>
                    {/* NavLink would be used instead if using 'active styling' style={link} with const link = {} */}
                </ul>
            </nav>
        </div>
    );
    }
  };
  
  export default MenuPane;

//   