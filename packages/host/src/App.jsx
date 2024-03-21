import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useCount } from "host/store";

const NavBar = React.lazy(() => import("ui/NavBar"));
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const Stations = React.lazy(() => import("stations/Stations"));

const App = () => {
  const [count] = useCount();

  return (
    <div className="app">
      Host, count: {count}
      <BrowserRouter>
        <React.Suspense fallback={"Loading NavBar..."}>
          <NavBar>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/stations">Stations</Link>
          </NavBar>
        </React.Suspense>

        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={
              <React.Suspense fallback={"Loading Dashboard..."}>
                <Dashboard />
              </React.Suspense>
            }
          />
          <Route
            path="/stations"
            element={
              <React.Suspense fallback={"Loading Stations..."}>
                <Stations />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
