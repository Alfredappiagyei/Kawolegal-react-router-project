import React from 'react';

import "./App.css";
import brand from './router/photos/klogo.png';
function Nav() {
  constructor(props) 
    return (
        <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"/><img src={brand} width="150" height="45" />
                </div>
                


              <ul className="nav navbar-nav navbar-right">
                <li>
                <Link to="/">Home</Link>
                  </li>
                <li>
                <Link to="/startups">Startups</Link>
                  </li>
                <li>
                <Link to="/register">Register</Link>
                  </li>
                <li>
                <Link to="/login">Login</Link>
                  </li>
              </ul>
            </div>
            </nav>
      </div>
      
    );
}

export default Nav;