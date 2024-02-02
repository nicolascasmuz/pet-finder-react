import React from "react";
import { ButtonComp } from "../components/ButtonComp.js";
import { FormInputComp } from "../components/FormInputComp.js";
import "./new-report-page.css";
import uploadPic from "../resources/upload-pic.png";
import pinMap from "../resources/pin-map.png";

export function NewReportPage(props) {
  return (
    <div className="general-container">
      <h1 className="new-report-main-title">Reportar mascota</h1>
      <p className="paragraph-01">
        Ingresá la siguiente información para realizar el reporte de la mascota
      </p>
      <form className="new-report-form">
        <FormInputComp
          className="name-input"
          type="text"
          name="name"
          textContent="NOMBRE"
        />
        <img className="add-pet-pic" src={uploadPic} alt="upload-picture" />
        <div className="map-container">
          <div className="map"></div>
          <img className="pin-map" src={pinMap} alt="test-map" />
        </div>
        <p className="paragraph-02">
          Buscá un punto de referencia para reportar la mascota. Por ejemplo, la
          ubicación donde lo viste por última vez.
        </p>
        <label className="details-label">
          OBSERVACIONES
          <textarea className="details-input" type="text" name="det"></textarea>
          <p className="details-required-field">Campo obligatorio</p>
        </label>
        <ButtonComp
          className="button-report"
          color="#ff7f87"
          textContent="Reportar mascota"
        />
        <ButtonComp
          className="button-cancel"
          color="#ff7f87"
          textContent="Cancelar"
        />
      </form>
    </div>
  );
}
