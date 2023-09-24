import React, { useEffect, useState } from "react";
import "./style.css";
import { FLIGHTCLASSES, formatDate } from "../../utils";
import placeData from "../../data/places.json";
import { useNavigate } from "react-router-dom";

function Search() {
  const [destination, setDestination] = useState({
    place: "New York, NY",
    country: "United States",
    countryCode: "USA",
    airport: "John F. Kennedy International Airport",
    image:
      "https://images.unsplash.com/photo-1566546415667-71e5245881ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3eW9ya3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    rating: 4,
  });

  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [isOneWay, setIsOneWay] = useState(true);
  const [activeElement, setActiveElement] = useState("oneWay");

  const generateRandomDate = (from, to) => {
    return new Date(
      from.getTime() + Math.random() * (to.getTime() - from.getTime())
    );
  };

  const randomFlightClass = Math.floor(Math.random() * FLIGHTCLASSES.length);
  const randomLocation = Math.floor(Math.random() * placeData.length);
  const currentLocation =
    placeData[randomLocation].place === destination.place
      ? placeData[randomLocation + 1]
      : placeData[randomLocation];
  const flightClass = FLIGHTCLASSES[randomFlightClass];

  useEffect(() => {
    const place = JSON.parse(localStorage.getItem("destination"));
    setDestination(place);
    setFromDate(generateRandomDate(new Date(), new Date(2025, 7)));
  }, []);

  useEffect(() => {
    setToDate(generateRandomDate(fromDate, new Date(2025, 7)));
  }, [fromDate]);

  const handleNavClick = (element) => {
    setActiveElement(element);
    setIsOneWay(element === "oneWay");
  };

  const handleSearch = () => {
    const ticketInput = {
      ...destination,
      from: fromDate,
      to: toDate,
      currentLocation: currentLocation,
      class: flightClass,
    };
    localStorage.setItem("ticketInput", JSON.stringify(ticketInput));
    localStorage.setItem("oneWay", isOneWay);
    navigate("/selectFlight");
  };

  return (
    <div className="search">
      <nav className="search-nav">
        <ul className="search-list">
          <li
            className={`search-option one-way ${
              activeElement === "oneWay" ? "active" : ""
            }`}
            onClick={() => handleNavClick("oneWay")}>
            <i className="fi fi-rr-arrow-small-up"></i>One Way
          </li>
          <li
            className={`search-option round ${
              activeElement === "round" ? "active" : ""
            }`}
            onClick={() => handleNavClick("round")}>
            <i className="fi fi-rr-refresh"></i>Round Trip
          </li>
          <li
            className={`search-option ${
              activeElement === "multi" ? "active" : ""
            }`}
            onClick={() => handleNavClick("multi")}>
            <i className="fi fi-rr-recycle"></i>Multi City
          </li>
        </ul>
      </nav>
      <main className="search-main-content">
        <ul className="search-details">
          <li className="search-details-individual">
            <span className="search-details-title">Location</span>
            <span className="search-details-value">
              {currentLocation.place}, {currentLocation.country}
            </span>
          </li>
          <li className="search-details-individual">
            <span className="search-details-title">Destination</span>
            <span className="search-details-value">
              {destination.place}, {destination.country}
            </span>
          </li>
          <li className="search-details-individual">
            <span className="search-details-title">Departure</span>
            <span className="search-details-value">{formatDate(fromDate)}</span>
          </li>
          {!isOneWay && (
            <li className="search-details-individual">
              <span className="search-details-title">Return</span>
              <span className="search-details-value">{formatDate(toDate)}</span>
            </li>
          )}
          <li className="search-details-individual">
            <span className="search-details-title">class</span>
            <span className="search-details-value">{flightClass}</span>
          </li>
        </ul>
        <button className="search-btn" onClick={handleSearch}>
          Search Flights
        </button>
      </main>
    </div>
  );
}

export default Search;
