import React from "react";
import mapboxgl from "mapbox-gl";
import MapboxClient from "mapbox";
import { ButtonComp } from "../components/ButtonComp.js";
import { FormInputComp } from "../components/FormInputComp.js";
import "./location-page.css";
import getLocationImg from "../resources/get-location_1@2x.png";
import { Link } from "react-router-dom";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibmljb2xhc2Nhc211eiIsImEiOiJjbGlnazg2cjExZTdvM21tcWl6eGU5bDM0In0.EtaC4N7nb_NuwfddaKZaow";
mapboxgl.accessToken = MAPBOX_TOKEN;
const mapboxClient = new MapboxClient(MAPBOX_TOKEN);

export function LocationPage(props) {
  return (
    <div className="general-container">
      <img
        className="main-page-picture"
        src={getLocationImg}
        alt="main-page-picture"
      />
      <form className="location-form">
        <FormInputComp
          className="input1"
          type="text"
          name="address"
          textContent="DIRECCIÓN"
        />
        <FormInputComp
          className="input2"
          type="text"
          name="town"
          textContent="LOCALIDAD"
        />
        <ButtonComp
          className="button-next"
          color="#00a884"
          textContent="Siguiente"
        />
      </form>
    </div>
  );
}
