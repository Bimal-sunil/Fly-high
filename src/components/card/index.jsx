import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const { place } = props;
  const navigate = useNavigate();
  const handleCardClick = () => {
    localStorage.setItem("destination", JSON.stringify(place));
    navigate("/search");
  };
  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card-image-container">
        <img src={place.image} alt="" className="card-image" />
      </div>
      <div className="card-details">
        <div className="place-details">
          <span className="place">{place.place}</span>
          <span className="country">{place.country}</span>
        </div>
        <div className="rating">
          <span>{place.rating}</span>
          <i className="fi fi-sr-star"></i>
        </div>
      </div>
      <button className="favorite-btn">
        <i className="fi fi-rr-heart"></i>
      </button>
    </div>
  );
}

export default Card;
