import React from "react";
import ReactDOM from "react-dom/client";
import Stations from "./Stations";
import "./index.css";
import { CountProvider } from "host/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountProvider>
      <Stations />
    </CountProvider>
  </React.StrictMode>
);
