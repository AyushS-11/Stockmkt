import React from "react";
import { Link, useLocation } from "react-router-dom";

function TopBar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path || location.pathname === `/dashboard${path}` ? "active" : "";
  };

  return (
    <div className="topbar">
      <div className="logo">
        <Link to="/dashboard">
          <img src="/media/logo.png" alt="Zerodha" style={{ height: "40px", width: "auto" }} />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link>
        <Link to="/dashboard/orders" className={isActive("/orders")}>Orders</Link>
        <Link to="/dashboard/holdings" className={isActive("/holdings")}>Holdings</Link>
        <Link to="/dashboard/positions" className={isActive("/positions")}>Positions</Link>
        <Link to="/dashboard/funds" className={isActive("/funds")}>Funds</Link>
        <Link to="/dashboard/apps" className={isActive("/apps")}>Apps</Link>
      </div>
      <div className="user-menu">
        <div className="user-avatar">ZU</div>
        <span className="user-id">USERID</span>
      </div>
    </div>
  );
}

export default TopBar;
