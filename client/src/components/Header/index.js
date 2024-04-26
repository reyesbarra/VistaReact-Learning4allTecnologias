import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


import './style.css';

class Header extends Component {
  render() {
    return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src="/LogoL4.svg" alt="Logo" width="200" height="50" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <NavLink to="/" style={{ color: 'black' }}>Inicio</NavLink>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
    )
  }
}

export default Header;