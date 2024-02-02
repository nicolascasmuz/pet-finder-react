import React from "react";
import { ButtonComp } from "../components/ButtonComp.js";
import { FormInputComp } from "../components/FormInputComp.js";
import "./sign-up-page.css";
import { Link } from "react-router-dom";

export function SignUpPage(props) {
  return (
    <div className="general-container">
      <h1 className="sign-up-main-title">Registrarse</h1>
      <p className="paragraph-01">
        Ingresá los siguientes datos para realizar el registro
      </p>
      <form className="signup-form">
        <FormInputComp
          className="input1"
          type="email"
          name="email"
          textContent="EMAIL"
        />
        <FormInputComp
          className="input2"
          type="password"
          name="pass"
          textContent="CONTRASEÑA"
        />
        <FormInputComp
          className="input3"
          type="password"
          name="checkpass"
          textContent="CONFIRMAR CONTRASEÑA"
        />
        <p className="paragraph-02">
          ¿Ya tenés una cuenta?{" "}
          <Link to="/log-in" className="login-link">
            Iniciar sesión.
          </Link>
        </p>
        <div className="button-access">
          <ButtonComp color="#ff7f87" textContent="Acceder" />
        </div>
      </form>
    </div>
  );
}
