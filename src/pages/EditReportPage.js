import React from "react";
import { ButtonComp } from "../components/ButtonComp.js";
import { FormInputComp } from "../components/FormInputComp.js";
import "./edit-report-page.css";
import pinMap from "../resources/pin-map.png";
import testPic from "../resources/test-pic.png";

export function EditReportPage(props) {
  return (
    <div className="general-container">
      <h1 className="edit-report-main-title">Editar reporte de mascota</h1>
      <form className="edit-report-form">
        <FormInputComp
          className="name-input"
          type="text"
          name="name"
          value="Nombre de la mascota"
          textContent="NOMBRE"
        />
        <img className="add-pet-pic" src={testPic} alt="upload-picture" />
        <div className="map-container">
          <div className="map"></div>
          <img className="pin-map" src={pinMap} alt="test-map" />
        </div>
        <p className="paragraph-02">Editar punto de referencia.</p>
        <label className="details-label">
          OBSERVACIONES
          <textarea className="details-input" type="text" name="det">
            Detalles de la mascota.
          </textarea>
          <p className="details-required-field">Campo obligatorio</p>
        </label>
        <ButtonComp
          className="button-save"
          color="#ff7f87"
          textContent="Guardar"
        />
      </form>
      <ButtonComp
        className="button-found"
        color="#ff7f87"
        textContent="Reportar como encontrado"
      />
      <ButtonComp
        className="button-delete"
        color="#ff7f87"
        textContent="Eliminar reporte"
      />
    </div>
  );
}
