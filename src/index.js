import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { userDataState, init } from "./hooks/user.js";
import "./index.css";

import { indexRouter } from "./routes/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot
    initializeState={({ set }) => {
      set(userDataState, init());
    }}
  >
    <React.StrictMode>
      <RouterProvider router={indexRouter} />
    </React.StrictMode>
  </RecoilRoot>
);
