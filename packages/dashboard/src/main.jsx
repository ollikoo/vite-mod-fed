import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import "./index.css";
import { CountProvider } from "host/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountProvider>
      <Dashboard />
    </CountProvider>
  </React.StrictMode>
);
