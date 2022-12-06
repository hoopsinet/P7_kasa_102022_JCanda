import React from "react";
import Header from "../../components/common/header/Header";
import Banniere from "../../components/banner/Banner";
import locations from "../../data.json";
import Location from "../../components/locations/Location";
import Footer from "../../components/common/footer/Footer";
import banniere_background from "../../img/banniere.png";
import "./Home.css";
import "../../Common.css";

export default function Home() {
  console.log(locations);

  return (
    <div className="Page-container">

        <div className="main_container">
          <Header />
          <Banniere picture={ banniere_background } text={<p className="banniere_text">Chez vous, <br/>partout et ailleurs</p>} />
          <div className="locations">
            <Location />
          </div>
        </div>
        <Footer />
      </div>

  );
}