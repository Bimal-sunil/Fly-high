import React from "react";
import Header from "../../components/header";
import Search from "../../components/search";
import "./style.css";

function SearchFlight() {
  return (
    <>
      <Header />
      <div className="search-page">
        <Search />
      </div>
    </>
  );
}

export default SearchFlight;
