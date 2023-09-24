import React from "react";
import './style.css'

function Card() {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src="https://plus.unsplash.com/premium_photo-1664304458186-9a67c1330d02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="card-image"
        />
      </div>
      <div className="card-details">
        <i class="fi fi-rr-marker location-mark"></i>
        <div className="place-details">
          <span className="place">Goa</span>
          <span className="country">India</span>
        </div>
        <div className="rating">
          <span>4.5</span>
          <i class="fi fi-sr-star"></i>
        </div>
      </div>
      <button className="favorite-btn">
        <i class="fi fi-rr-heart"></i>
      </button>
    </div>
  );
}

export default Card;
