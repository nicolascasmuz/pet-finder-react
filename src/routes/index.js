import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "../index.css";
import reportWebVitals from "../reportWebVitals.js";

import { App } from "../App.js";
import { MainPage } from "../pages/MainPage.js";
import { LogInPage } from "../pages/LogInPage.js";
import { SignUpPage } from "../pages/SignUpPage.js";
import { LocationPage } from "../pages/LocationPage.js";
import { HomePage } from "../pages/HomePage.js";
import { MyDataPage } from "../pages/MyDataPage.js";
import { EditDataPage } from "../pages/EditDataPage.js";
import { EditPassPage } from "../pages/EditPassPage.js";
import { ReportedPetsPage } from "../pages/ReportedPetsPage.js";
import { NoReportedPetsPage } from "../pages/NoReportedPetsPage.js";
import { NewReportPage } from "../pages/NewReportPage.js";
import { EditReportPage } from "../pages/EditReportPage.js";
import { NewReportedPetPage } from "../pages/NewReportedPetPage.js";
import { FoundPetPage } from "../pages/FoundPetPage.js";
import { DeletedPetPage } from "../pages/DeletedPetPage.js";

export const indexRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/log-in",
        element: <LogInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "/location",
        element: <LocationPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/my-data",
        element: <MyDataPage />,
      },
      {
        path: "/edit-data",
        element: <EditDataPage />,
      },
      {
        path: "/edit-pass",
        element: <EditPassPage />,
      },
      {
        path: "/reported-pets",
        element: <ReportedPetsPage />,
      },
      {
        path: "/no-reported-pets",
        element: <NoReportedPetsPage />,
      },
      {
        path: "/new-report",
        element: <NewReportPage />,
      },
      {
        path: "/edit-report",
        element: <EditReportPage />,
      },
      {
        path: "/new-reported-pet",
        element: <NewReportedPetPage />,
      },
      {
        path: "/found-pet",
        element: <FoundPetPage />,
      },
      {
        path: "/deleted-pet",
        element: <DeletedPetPage />,
      },
    ],
  },
]);

reportWebVitals();
