import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Watchlist from "./Watchlist";
import Summary from "./Summary";
import TopBar from "./TopBar";
import Orders from "./pages/Orders";
import Holdings from "./pages/Holdings";
import Positions from "./pages/Positions";
import Funds from "./pages/Funds";
import Apps from "./pages/Apps";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <TopBar />
      <div className="dashboard-content">
        <div className="watchlist-section">
          <Watchlist />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
