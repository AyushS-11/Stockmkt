import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-5">To create a ticket, select a relevant topic</h1>
        
        {/* Row 1 */}
        <div className="col-4 p-4">
          <h5 className="mb-3">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Online Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Offline Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Company, Partnership and HUF Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            NRI Account Opening
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Charges at Zerodha
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Getting Started
          </a>
        </div>
        
        <div className="col-4 p-4">
          <h5 className="mb-3">
            <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Account Modification and Segment Addition
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            DP ID and bank details
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Your Profile
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Transfer and conversion of shares
          </a>
        </div>
        
        <div className="col-4 p-4">
          <h5 className="mb-3">
            <i className="fa fa-globe" aria-hidden="true"></i> Kite Web and Mobile
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Trading FAQs
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Corporate Actions
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Sentinel
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Kite API
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Pi and other platforms
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Stockreports+
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            GTT
          </a>
        </div>
        
        {/* Row 2 */}
        <div className="col-4 p-4">
          <h5 className="mb-3">
            <i className="fa fa-money" aria-hidden="true"></i> Funds
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Adding Funds
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Fund Withdrawal
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            eMandates
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Adding Bank Accounts
          </a>
        </div>
        
        <div className="col-4 p-4">
          <h5 className="mb-3">
            <i className="fa fa-desktop" aria-hidden="true"></i> Console
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Reports
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Ledger
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Portfolio
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            60 Day Challenge
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            IPO
          </a>
        </div>
        
        <div className="col-4 p-4">
          <h5 className="mb-3">
            <i className="fa fa-circle-o" aria-hidden="true"></i> Coin
          </h5>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Understanding Mutual Funds
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            About Coin
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Buying and Selling through Coin
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Starting an SIP
          </a>
          <br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.2", color: "#666", fontSize: "14px" }}>
            Managing your Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
