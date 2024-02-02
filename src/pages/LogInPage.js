import React, { useEffect } from "react";
import { ButtonComp } from "../components/ButtonComp.js";
import { FormInputComp } from "../components/FormInputComp.js";
import "./log-in-page.css";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/user.js";

export function LogInPage(props) {
  useEffect(() => {}, []);

  return (
    <div className="general-container">
      <h1 className="log-in-main-title">Iniciar sesión</h1>
      <p className="paragraph-01">
        Ingresá los siguientes datos para iniciar sesión
      </p>
      <form className="login-form">
        <FormInputComp
          className="input1"
          type={"email"}
          name={"email"}
          textContent={"EMAIL"}
        />
        <FormInputComp
          className="input2"
          type={"password"}
          name={"pass"}
          textContent={"CONTRASEÑA"}
        />
        <p className="paragraph-02">
          ¿Aún no estás registrado?{" "}
          <Link to="/sign-up" className="login-link">
            Registrarse.
          </Link>
        </p>
        <div className="button-next">
          <ButtonComp color="#ff7f87" textContent={"Siguiente"} />
        </div>
      </form>
    </div>
  );
}
