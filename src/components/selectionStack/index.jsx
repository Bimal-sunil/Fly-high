import React from "react";
import Ticket from "../ticket";
import "./style.css";

function SelectionStack() {
  return (
    <div className="selectionStack">
      <span className="travel-direction">Departure</span>
      <div className="stack-content">
        <div className="stack-details">
          <div className="travel-date">
            <i class="fi fi-rr-calendar-day"></i>
            Sept 24, 2024
          </div>
          <div className="travel-class">
            <i class="fi fi-rr-plane-alt"></i>Economy
          </div>
        </div>
        <div className="flight-options">
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
}

export default SelectionStack;
