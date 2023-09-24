import React, { useRef, useState } from "react";
import Card from "../card";
import placeData from "../../data/places.json";
import "./style.css";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const sliderRef = useRef(null);

  const handlePrevBtn = () => {
    setCurrentIndex((prevCard) => prevCard - 1);
    sliderRef.current.style.transform = `translateX(${translate + 15}rem)`;
    setTranslate((prevTranslate) => prevTranslate + 15);
  };

  const handleNextBtn = () => {
    setCurrentIndex((prevCard) => prevCard + 1);
    sliderRef.current.style.transform = `translateX(${translate - 15}rem)`;
    setTranslate((prevTranslate) => prevTranslate - 15);
  };
  return (
    <div className="carousel">
      <span className="heading">Explore Destinations</span>
      <main className="carousel-main">
        <button
          className={`prev-btn arrow-btn ${
            currentIndex === 0 ? "hidden-arrow" : ""
          }`}
          onClick={handlePrevBtn}>
          <i className="fi fi-rr-arrow-small-left"></i>
        </button>
        <div className="carousel-list">
          <div className="carousel-slider" ref={sliderRef}>
            {placeData.map((place, index) => {
              return <Card place={place} key={index} />;
            })}
          </div>
        </div>
        <button
          className={`next-btn arrow-btn ${
            currentIndex === placeData.length - 4 ? "hidden-arrow" : ""
          }`}
          onClick={handleNextBtn}>
          <i className="fi fi-rr-arrow-small-right"></i>
        </button>
      </main>
    </div>
  );
}

export default Carousel;
