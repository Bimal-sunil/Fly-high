import React from "react";
import "../header/style.css";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="./assets/logo-png.png" alt="" className="logo"/>
        <section className="app-name">
          <h1>Fly High</h1>
          <span>chase your heights</span>
        </section>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
          <i class="fi fi-rr-badge-percent"></i>
          </li>
          <li className="nav-item">
          <i class="fi fi-rr-headset"></i>
          </li>
          <li className="nav-item">
          <i class="fi fi-rr-user"></i>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
