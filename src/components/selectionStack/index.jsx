import React, { useEffect, useState } from "react";
import Ticket from "../ticket";
import airlineData from "../../data/airlines.json";
import "./style.css";
import { formatDateFromISOString } from "../../utils";

function SelectionStack({ direction }) {
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
    <div className="selectionStack">
      <span className="travel-direction">{direction}</span>
      <div className="stack-content">
        <div className="stack-details">
          <div className="travel-date">
            <i className="fi fi-rr-calendar-day"></i>
            {formatDateFromISOString(
              direction === "Departure" ? ticketInput.from : ticketInput.to
            )}
          </div>
          <div className="travel-className">
            <i className="fi fi-rr-plane-alt"></i>Economy
          </div>
        </div>
        <div className="flight-options">
          {airlineData.map((airline, index) => {
            return (
              <Ticket key={index} airline={airline} direction={direction} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SelectionStack;
