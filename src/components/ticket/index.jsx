import React from "react";
import './style.css'

function Ticket() {
  return (
    <div className="ticket">
      <div className="travel-details">
        <div className="departure">
          <span className="departure-time">7:05 AM</span>
          <span className="departure-place">CAN</span>
        </div>
        <i class="fi fi-sr-plane-alt"></i>
        <div className="arrival">
          <span className="arrival-time">8:10 PM</span>
          <span className="arrival-place">GER</span>
        </div>
      </div>
      <div className="flight-details">
        <span className="airline">Air Canada</span>
        <span className="price">$1200</span>
      </div>
    </div>
  );
}

export default Ticket;
