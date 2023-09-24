import React from "react";
import Card from "../card";
import "./style.css";

function Carousel() {
  return (
    <div className="carousel">
      <span className="heading">Explore Destinations</span>
      <main className="carousel-main">
        <button className="prev-btn arrow-btn">
          <i class="fi fi-rr-arrow-small-left"></i>
        </button>
        <div className="carousel-list">
          <div className="carousel-slider">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <button className="next-btn arrow-btn">
          <i class="fi fi-rr-arrow-small-right"></i>
        </button>
      </main>
    </div>
  );
}

export default Carousel;
