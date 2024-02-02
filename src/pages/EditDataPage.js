import React from "react";
import { ButtonComp } from "../components/ButtonComp.js";
import { FormInputComp } from "../components/FormInputComp.js";
import "./edit-data-page.css";
import blankProfilePic from "../resources/blank-profile-picture.png";
import { Link } from "react-router-dom";

export function EditDataPage(props) {
  return (
    <div className="general-container">
      <h1 className="main-title">Modificar datos</h1>
      <form className="modify-data-form" action="/target" className="dropzone">
        <center>
          <img
            action="/target"
            className="add-profile-pic"
            src={blankProfilePic}
            alt="add-profile-pic"
          />
        </center>
        <FormInputComp
          className="nickname-input"
          type="text"
          name="nick"
          value="ejemplo"
          textContent="NICK"
        />
        <FormInputComp
          className="email-input"
          type="email"
          name="email"
          value="ejemplo"
          textContent="EMAIL"
        />
        <FormInputComp
          className="location1-input"
          type="text"
          name="address"
          value="ejemplo"
          textContent="DIRECCIÓN"
        />
        <FormInputComp
          className="location2-input"
          type="text"
          name="loc"
          value="ejemplo"
          textContent="LOCALIDAD"
        />
        <div className="button-guardar">
          <ButtonComp color="#ff7f87" textContent="Guardar" />
        </div>
      </form>
    </div>
  );
}
