import React, { Children } from "react";
import "./form-input-comp.css";

export function FormInputComp(props) {
  return (
    <label className="form-input__label">
      {props.textContent}
      <input
        className="form-input__input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </label>
  );
}
