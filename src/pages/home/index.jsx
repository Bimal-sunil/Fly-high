import React from "react";
import Header from "../../components/header";
import "./style.css";
import Carousel from "../../components/carousel";

function Home() {
  return (
    <div className="home">
      <Header />
      <main className="main-page">
        <img
          src="./assets/illustration-1.png"
          alt=""
          className="banner-illustration"
        />
        <img src="./assets/banner.png" alt="" className="banner-image" />
        <div className="main-content">
          <Carousel />
        </div>
      </main>
    </div>
  );
}

export default Home;
