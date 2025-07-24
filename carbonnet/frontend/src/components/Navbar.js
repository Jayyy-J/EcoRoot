import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">CarbonNet</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/marketplace">Marketplace</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
