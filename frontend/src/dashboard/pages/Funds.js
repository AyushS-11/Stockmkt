import React from "react";

function Funds() {
  return (
    <div className="funds-container">
      <div className="funds-header">
        <span className="funds-note">Instant, zero-cost fund transfers with UPI</span>
        <div className="funds-actions">
          <button className="btn btn-primary btn-add">Add funds</button>
          <button className="btn btn-primary btn-withdraw">Withdraw</button>
        </div>
      </div>
      
      <div className="funds-section">
        <h5 className="section-title">Equity</h5>
        <div className="funds-table">
          <div className="fund-row">
            <span className="fund-label">Available margin</span>
            <span className="fund-value">4,043.10</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Used margin</span>
            <span className="fund-value">3,757.30</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Available cash</span>
            <span className="fund-value">4,043.10</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Opening Balance</span>
            <span className="fund-value">4,043.10</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Opening Balance</span>
            <span className="fund-value">3,736.40</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Payin</span>
            <span className="fund-value">8564.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">SPAN</span>
            <span className="fund-value">0.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Delivery margin</span>
            <span className="fund-value">0.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Exposure</span>
            <span className="fund-value">0.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Options premium</span>
            <span className="fund-value">0.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Collateral (Liquid funds)</span>
            <span className="fund-value">0.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Collateral (Equity)</span>
            <span className="fund-value">0.00</span>
          </div>
          <div className="fund-row">
            <span className="fund-label">Total Collateral</span>
            <span className="fund-value">0.00</span>
          </div>
        </div>
      </div>
      
      <div className="funds-footer">
        <p>You don't have a commodity account</p>
      </div>
    </div>
  );
}

export default Funds;
