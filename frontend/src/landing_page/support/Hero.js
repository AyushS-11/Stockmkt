import React from "react";

function Hero() {
  return (
    <section className="container-fluid" style={{ backgroundColor: "#387ed1", color: "white" }}>
      <div className="container">
        <div className="row p-4">
          <div className="col-6">
            <h5>Support Portal</h5>
          </div>
          <div className="col-6 text-end">
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Track Tickets</a>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-6 p-3">
            <h2 className="fs-4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input 
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..." 
              className="form-control mb-3"
              style={{ padding: "15px", borderRadius: "5px", border: "none" }}
            />
            <div className="mt-3">
              <a href="#" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>Track account opening</a>
              <a href="#" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>Track segment activation</a>
              <a href="#" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>Intraday margins</a>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>Kite user manual</a>
            </div>
          </div>
          <div className="col-6 p-3">
            <h2 className="fs-4 mb-4">Featured</h2>
            <ol style={{ paddingLeft: "20px" }}>
              <li className="mb-2">
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
