import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__logo">SPACE</NavLink>
      <ul className="nav__list list">
        <li className="list__item">
          <NavLink to="/" className="list__item-link"> Home</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/apod" className="list__item-link">Pic Of The Day</NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/archive"  className="list__item-link">Archive</NavLink>
        </li>
      </ul>
      <div className="nav__download-app">
        <a target="_blank" href="google.com">
          download
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
