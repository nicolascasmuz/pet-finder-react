import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HeaderComp } from "./components/HeaderComp.js";
import { HeaderMenuComp } from "./components/HeaderMenuComp.js";
import "./App.css";

export function App() {
  let loggedIn = false;

  return (
    <div className="app-container">
      {loggedIn ? <HeaderMenuComp /> : <HeaderComp />}
      <Outlet />
    </div>
  );
}
