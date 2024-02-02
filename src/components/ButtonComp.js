import React, { Children } from "react";
import "./button-comp.css";

export function ButtonComp(props) {
  return (
    <button className="button" style={{ backgroundColor: props.color }}>
      {props.textContent}
    </button>
  );
}
