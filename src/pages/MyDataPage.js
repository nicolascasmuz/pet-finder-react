import React from "react";
import { ButtonComp } from "../components/ButtonComp.js";
import "./my-data-page.css";
import blankProfilePic from "../resources/blank-profile-picture.png";
import { Link } from "react-router-dom";

export function MyDataPage(props) {
  return (
    <div className="general-container">
      <h1 className="data-main-title">Mis datos</h1>
      <div className="data-container">
        <center>
          <img
            className="profile-pic-field"
            src={blankProfilePic}
            alt="profile-pic-field"
          />
        </center>
        <p className="name-field">
          NICK: <span className="name-span">Ejemplo</span>
        </p>
        <p className="email-field">
          EMAIL: <span className="email-span">Ejemplo</span>
        </p>
        <p className="address-field">
          DIRECCIÓN: <span className="location-span">Ejemplo</span>
        </p>
        <p className="location-field">
          LOCALIDAD: <span className="location-span">Ejemplo</span>
        </p>
      </div>
      <div className="options-container">
        <Link to="/edit-data" className="button-datos">
          <ButtonComp color="#ff7f87" textContent="Modificar datos" />
        </Link>
        <Link to="/edit-pass" className="button-contraseña">
          <ButtonComp color="#ff7f87" textContent="Modificar contraseña" />
        </Link>
      </div>
    </div>
  );
}
