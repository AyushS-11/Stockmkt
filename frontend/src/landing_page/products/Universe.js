import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h2 className="mb-3">The Zerodha Universe</h2>
        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mb-5">
        <div className="col-4 p-4">
          <img src="/media/smallcaseLogo.png" alt="Smallcase" style={{ height: "50px" }} />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>Thematic investment platform</p>
        </div>
        <div className="col-4 p-4">
          <img src="/media/streakLogo.png" alt="Streak" style={{ height: "50px" }} />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>Algo & strategy platform</p>
        </div>
        <div className="col-4 p-4">
          <img src="/media/sensibullLogo.svg" alt="Sensibull" style={{ height: "50px" }} />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>Options trading platform</p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <div className="col-4 p-4">
          <img src="/media/zerodhaFundhouse.png" alt="Zerodha Fund House" style={{ height: "50px" }} />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>Asset management</p>
        </div>
        <div className="col-4 p-4">
          <img src="/media/goldenpiLogo.png" alt="GoldenPi" style={{ height: "50px" }} />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>Bonds trading platform</p>
        </div>
        <div className="col-4 p-4">
          <img src="/media/dittoLogo.png" alt="Ditto" style={{ height: "50px" }} />
          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>Insurance advisory</p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-12">
          <button
            className="btn btn-primary px-4 py-2"
            style={{ fontSize: "1.1rem" }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
