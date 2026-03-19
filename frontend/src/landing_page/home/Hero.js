import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">

        {/* Hero Image */}
        <img
          src="/media/homeHero.png"
          alt="Hero"
          className="img-fluid mb-5"
        />

        {/* Heading */}
        <h1 className="mt-5">Invest in everything</h1>

        {/* Paragraph */}
        <p>
          Online platform to invest in stocks, derivatives,
          mutual funds, and more
        </p>

        {/* Button */}
        <button
          className="btn btn-primary fs-5 mb-5"
          style={{
            width: "200px",
            display: "block",
            margin: "0 auto"
          }}
        >
          Signup Now
        </button>

      </div>
    </div>
  );
}

export default Hero;