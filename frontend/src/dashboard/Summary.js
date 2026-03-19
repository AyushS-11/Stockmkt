import React from "react";

function Summary() {
  return (
    <div className="summary">
      <h2 className="greeting">Hi, User!</h2>
      
      <div className="section">
        <h3><i className="fa fa-circle-o"></i> Equity</h3>
        <div className="equity-grid">
          <div className="metric">
            <span className="metric-value">3.74k</span>
            <span className="metric-label">Margin available</span>
          </div>
          <div className="metric">
            <span className="metric-label">Margins used</span>
            <span className="metric-value">0</span>
          </div>
          <div className="metric">
            <span className="metric-label">Opening balance</span>
            <span className="metric-value">3.74k</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h3><i className="fa fa-briefcase"></i> Holdings (13)</h3>
        <div className="holdings-summary">
          <div className="pnl">
            <span className="pnl-value positive">1.55k</span>
            <span className="pnl-label">P&L</span>
            <span className="pnl-percent positive">+5.20%</span>
          </div>
          <div className="holdings-details">
            <div className="detail">
              <span className="detail-label">Current Value</span>
              <span className="detail-value">31.43k</span>
            </div>
            <div className="detail">
              <span className="detail-label">Investment</span>
              <span className="detail-value">29.88k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
