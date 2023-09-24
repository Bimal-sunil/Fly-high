import React, { useEffect, useState } from "react";
import SelectionStack from "../../components/selectionStack";
import Header from "../../components/header";
import "./style.css";

function Confirmation() {
  const [isOneWay, setIsOneWay] = useState(true);
  useEffect(() => {
    setIsOneWay(JSON.parse(localStorage.getItem("oneWay")));
  }, []);
  return (
    <>
      <Header />
      <div className="confirmation-page">
        <h1 className="heading">Select your Flight</h1>
        <div className="stack-container">
          <SelectionStack direction="Departure" />
          {!isOneWay && <SelectionStack direction="Arrival" />}
        </div>
      </div>
    </>
  );
}

export default Confirmation;
