import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="brand">Dhum Biryani</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#types">Types</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
