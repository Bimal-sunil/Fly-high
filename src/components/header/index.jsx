import React from "react";
import { Link } from "react-router-dom";
import "../header/style.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <img src="./assets/logo-png.png" alt="" className="logo" />
          <section className="app-name">
            <h1>Fly High</h1>
            <span>chase your heights</span>
          </section>
        </div>
      </Link>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <i className="fi fi-rr-badge-percent"></i>
          </li>
          <li className="nav-item">
            <i className="fi fi-rr-headset"></i>
          </li>
          <li className="nav-item">
            <i className="fi fi-rr-user"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
