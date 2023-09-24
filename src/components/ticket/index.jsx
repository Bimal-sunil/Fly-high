import React, { useState, useEffect } from "react";
import "./style.css";
import {
  calculateRate,
  formatDateFromISOString,
  formatTimeFromISOString,
} from "../../utils";

function Ticket({ airline, direction }) {
  const [ticketInput, setTicketInput] = useState({
    place: "New York, NY",
    country: "United States",
    countryCode: "USA",
    airport: "John F. Kennedy International Airport",
    image:
      "https://images.unsplash.com/photo-1566546415667-71e5245881ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3eW9ya3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    rating: 4,
    from: "2023-12-20T02:55:00.977Z",
    to: "2024-11-14T08:41:08.175Z",
    currentLocation: {
      place: "Beijing",
      country: "China",
      countryCode: "CHN",
      airport: "Beijing Capital International Airport",
      image:
        "https://images.unsplash.com/photo-1603258740665-711401f368bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVpamluZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      rating: 5,
    },
    class: "Business Class",
  });

  useEffect(() => {
    const ticket = localStorage.getItem("ticketInput");
    setTicketInput(JSON.parse(ticket));
  }, []);

  return (
    <div
      className="ticket"
      onClick={() => {
        alert(
          `Booking Success :)
            Flight ${airline.airlineName} on ${formatDateFromISOString(
            ticketInput.from
          )} from ${ticketInput.currentLocation.airport}, ${
            ticketInput.currentLocation.place
          } at ${formatTimeFromISOString(ticketInput.from)}`
        );
      }}>
      <div className="travel-details">
        <div className="departure">
          <span className="departure-time">
            {formatTimeFromISOString(ticketInput.from)}
          </span>
          <span className="departure-place">
            {direction === "Departure"
              ? ticketInput.currentLocation.countryCode
              : ticketInput.countryCode}
          </span>
        </div>
        <i className="fi fi-sr-plane-alt"></i>
        <div className="arrival">
          <span className="arrival-time">
            {formatTimeFromISOString(ticketInput.to)}
          </span>
          <span className="arrival-place">
            {direction === "Departure"
              ? ticketInput.countryCode
              : ticketInput.currentLocation.countryCode}
          </span>
        </div>
      </div>
      <div className="flight-details">
        <span className="airline">{airline.airlineName}</span>
        <span className="price">
          $
          {calculateRate(
            ticketInput.currentLocation.place,
            ticketInput.place,
            airline.averageCost
          )}
        </span>
      </div>
    </div>
  );
}

export default Ticket;
