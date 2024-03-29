import React from "react";
import { ButtonComp } from "../components/ButtonComp.js";
import pinMap from "../resources/pin-map.png";
import "./home-page.css";
import { Link } from "react-router-dom";

export function HomePage(props) {
  return (
    <div className="general-container">
      <h1 className="home-main-title">Bienvenido Ejemplo</h1>
      <Link to="/my-data" className="button-01">
        <ButtonComp color="#ff7f87" textContent="Mis datos" />
      </Link>
      <Link to="/reported-pets" className="button-02">
        <ButtonComp color="#ff7f87" textContent="Mascotas reportadas" />
      </Link>
      <Link to="/new-report" className="button-03">
        <ButtonComp color="#ff7f87" textContent="Reportar mascota" />
      </Link>
      <div className="map-container">
        <img
          className="small-map"
          alt=""
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/-58.3966493,-34.7296406,14,0.00,0.00/310x190@2x?access_token=pk.eyJ1Ijoibmljb2xhc2Nhc211eiIsImEiOiJjbGlmYjFjZTQwbXk3M2Zwa3VrdGtha2g1In0.HuBxvL_9t1URB93rFefxfg"
        />
        <img className="pin-map" src={pinMap} alt="test-map" />
      </div>
    </div>
  );
}
