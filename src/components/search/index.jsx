import React from "react";
import './style.css'

function Search() {
  return (
    <div className="search">
      <nav className="search-nav">
        <ul className="search-list">
          <li className="search-option">
            <i class="fi fi-rr-arrow-small-up"></i>One Way
          </li>
          <li className="search-option">
            <i class="fi fi-rr-refresh"></i>Round Trip
          </li>
          <li className="search-option">
            <i class="fi fi-rr-recycle"></i>Multi City
          </li>
        </ul>
      </nav>
      <main className="search-main-content">
        <ul className="search-details">
          <li className="search-details-individual">
            <span className="search-details-title">Location</span>
            <span className="search-details-value">Canada</span>
          </li>
          <li className="search-details-individual">
            <span className="search-details-title">Destination</span>
            <span className="search-details-value">Germany</span>
          </li>
          <li className="search-details-individual">
            <span className="search-details-title">Departure</span>
            <span className="search-details-value">Sept 24, 2024</span>
          </li>
          <li className="search-details-individual">
            <span className="search-details-title">Return</span>
            <span className="search-details-value">Sept 24, 2026</span>
          </li>
          <li className="search-details-individual">
            <span className="search-details-title">Class</span>
            <span className="search-details-value">Economy</span>
          </li>
        </ul>
        <button className="search-btn">Search Flights</button>
      </main>
    </div>
  );
}

export default Search;
