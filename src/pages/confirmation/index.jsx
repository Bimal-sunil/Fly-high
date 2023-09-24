import React from "react";
import SelectionStack from "../../components/selectionStack";
import Header from "../../components/header";
import "./style.css";

function Confirmation() {
  return (
    <>
      <Header />
      <div className="confirmation-page">
        <h1 className="heading">Select your Flight</h1>
        <div className="stack-container">
          <SelectionStack />
          <SelectionStack />
        </div>
      </div>
    </>
  );
}

export default Confirmation;
