import React from "react";
import "./header-menu-comp.css";
import petFinderLogo1 from "../resources/pet-finder-logo.png";
import blankProfilePic from "../resources/blank-profile-picture.png";
import burgerMenuImg from "../resources/burger-menu.png";
import { Link } from "react-router-dom";

export function HeaderMenuComp(props) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={petFinderLogo1}
        alt="pet-finder-logo"
      />
      <input className="header__menu-input" type="checkbox" id="check" />
      <label htmlFor="check" className="header__menu-label">
        <div className="header__pp-burger-container">
          <img
            className="header__profile-pic-menu"
            src={blankProfilePic}
            alt="profile-pic-menu"
          />
          <img
            className="header__menu-img"
            src={burgerMenuImg}
            alt="menu-icon"
          />
        </div>
      </label>
      <ul className="header__menu-lista">
        <li>
          <a href="/home" className="header__option">
            Inicio
          </a>
          <a href="/my-data" className="header__option">
            Mis datos
          </a>
          <a href="/reported-pets" className="header__option">
            Mascotas reportadas
          </a>
          <a href="/new-report" className="header__option">
            Reportar mascota
          </a>
          <a href="/map" className="header__option">
            Mapa
          </a>
          <a href="/main" className="header__option-log-out">
            Cerrar sesión
          </a>
        </li>
      </ul>
    </header>
  );
}
