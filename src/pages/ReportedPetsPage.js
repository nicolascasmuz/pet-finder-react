import React from "react";
import { FoundPetCardComp } from "../components/FoundPetCardComp.js";
import { ReportedPetCardComp } from "../components/ReportedPetCardComp.js";
import "./reported-pets-page.css";
import { Link, Navigate } from "react-router-dom";

export function ReportedPetsPage(props) {
  const myReportedPets = [
    {
      id: 3,
      picURL:
        "https://res.cloudinary.com/dbgjrxaqf/image/upload/v1693689353/xzgq4y7vf3ow98txzbus.jpg",
      name: "Leoncia",
      details: "Está castrada y tiene una chapita con su nombre",
      found: true,
      lat: -34.6991734203197,
      lng: -58.3947083728498,
      createdAt: "2023-09-02T21:15:57.316Z",
      updatedAt: "2023-09-02T21:15:57.316Z",
      userId: 1,
    },
    {
      id: 2,
      picURL:
        "https://res.cloudinary.com/dbgjrxaqf/image/upload/v1696547154/mi47c72cetofrffvlwuu.jpg",
      name: "Billy",
      details: "La última vez lo vieron por Monte Chingolo.",
      found: false,
      lat: -34.7337248553531,
      lng: -58.3496177588717,
      createdAt: "2023-09-02T21:06:59.620Z",
      updatedAt: "2023-10-05T23:06:03.154Z",
      userId: 1,
    },
  ];

  return (
    <div className="general-container">
      <h1 className="main-title">Mascotas reportadas</h1>
      <div className="reported-pets-container">
        {myReportedPets.length ? (
          myReportedPets.map((rp) =>
            rp.found ? (
              <FoundPetCardComp
                id={rp.id}
                picURL={rp.picURL}
                name={rp.name}
                details={rp.details}
              />
            ) : (
              <ReportedPetCardComp
                id={rp.id}
                picURL={rp.picURL}
                name={rp.name}
                details={rp.details}
              />
            )
          )
        ) : (
          <Navigate to="/no-reported-pets" />
        )}
      </div>
    </div>
  );
}
