import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
return(
    <div>
        <header>
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse.collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-brand">
                <NavLink exact to='/' ><h1><span>V- Tech</span>nology</h1></NavLink>
              
            </div>
          </div>
          <div className="navbar-collapse collapse">
            <div className="menu">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation"><NavLink className="active" to='/'>Home</NavLink></li>
                <li role="presentation"><NavLink to='/about'>About Us</NavLink></li>
                <li role="presentation"><NavLink to='/services'>Services</NavLink></li>
                <li role="presentation"><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li role="presentation"><NavLink to='/contact'>Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
    </div>
);
}
export default Navbar;
