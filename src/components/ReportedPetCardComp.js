import React from "react";
import { Link } from "react-router-dom";
import "./reported-pet-card-comp.css";

export function ReportedPetCardComp(props) {
  return (
    <div className="card__container">
      <img className="card__img" src={props.picURL} alt="test-pic" />
      <div className="card__name-button">
        <h3 className="card__name">{props.name}</h3>
        <Link to="/edit-report">
          <button className="card__button">Editar</button>
        </Link>
      </div>
      <p className="card__details">{props.details}</p>
    </div>
  );
}
