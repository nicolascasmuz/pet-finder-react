import React from "react";
import { ButtonComp } from "../components/ButtonComp.js";
import { FormInputComp } from "../components/FormInputComp.js";
import "./edit-pass-page.css";
import blankProfilePic from "../resources/blank-profile-picture.png";
import { Link } from "react-router-dom";

export function EditPassPage(props) {
  return (
    <div className="general-container">
      <h1 className="main-title">Modificar contraseña</h1>
      <form className="modify-pass-form">
        <FormInputComp
          className="current-pass"
          type="password"
          name="password"
          textContent="CONTRASEÑA ACTUAL"
        />
        <FormInputComp
          className="new-pass"
          type="password"
          name="new-password"
          textContent="CONTRASEÑA NUEVA"
        />
        <FormInputComp
          className="repeat-new-pass"
          type="password"
          name="repeat-new-password"
          textContent="REPETIR CONTRASEÑA NUEVA"
        />
        <div className="button-guardar"></div>
        <ButtonComp color="#ff7f87" textContent="Guardar" />
      </form>
    </div>
  );
}
