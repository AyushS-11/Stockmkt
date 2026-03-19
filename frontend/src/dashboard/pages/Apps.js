import React from "react";

const appsData = [
  { name: "Kite", img: "/media/kite.png", desc: "The fast and elegant trading platform" },
  { name: "Console", img: "/media/console.png", desc: "Zerodha's back office" },
  { name: "Coin", img: "/media/coin.png", desc: "Direct mutual funds" },
  { name: "Kite Connect", img: "/media/kiteconnect.png", desc: "Trading APIs" },
  { name: "Varsity", img: "/media/varsity.png", desc: "Stock market education" },
  { name: "Sensibull", img: "/media/sensibullLogo.svg", desc: "Options trading platform" },
  { name: "Smallcase", img: "/media/smallcaseLogo.png", desc: "Invest in ideas" },
  { name: "Ditto", img: "/media/dittoLogo.png", desc: "Insurance advisory" },
  { name: "Goldenpi", img: "/media/goldenpiLogo.png", desc: "Bonds & fixed income" },
  { name: "Streak", img: "/media/streakLogo.png", desc: "Algo trading" },
];

function Apps() {
  return (
    <div className="apps-container">
      <h5 className="apps-title">Apps</h5>
      <div className="apps-grid">
        {appsData.map((app, index) => (
          <div key={index} className="app-card">
            <img src={app.img} alt={app.name} className="app-img" />
            <div className="app-info">
              <h6 className="app-name">{app.name}</h6>
              <p className="app-desc">{app.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apps;
