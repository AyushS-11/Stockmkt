import React, { useState } from "react";

const stocks = [
  { name: "INFY", price: 1555.45, change: -0.60, percent: -0.39 },
  { name: "ONGC", price: 116.8, change: -0.15, percent: -0.13 },
  { name: "TCS", price: 3194.8, change: -0.25, percent: -0.01 },
  { name: "NTPC", price: 144.2, change: -0.10, percent: -0.07 },
  { name: "HINDTECH", price: 256.4, change: 2.30, percent: 0.90 },
  { name: "WIPRO", price: 577.75, change: 1.25, percent: 0.22 },
  { name: "M&M", price: 779.8, change: -0.20, percent: -0.03 },
  { name: "RELIANCE", price: 2112.4, change: 4.60, percent: 0.22 },
  { name: "HUL", price: 512.4, change: 1.40, percent: 0.27 },
];

function Watchlist() {
  const [hoveredStock, setHoveredStock] = useState(null);

  return (
    <div className="watchlist">
      <div className="market-indices">
        <div className="index">
          <span className="index-name">NIFTY 50</span>
          <span className="index-value">0.00</span>
          <span className="index-change">0.00 (0.00%)</span>
        </div>
        <div className="index">
          <span className="index-name">SENSEX</span>
          <span className="index-value">0.00</span>
          <span className="index-change">0.00 (0.00%)</span>
        </div>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx" />
        <span className="search-count">9 / 50</span>
      </div>
      <div className="stock-list">
        {stocks.map((stock, index) => (
          <div 
            key={index} 
            className="stock-item"
            onMouseEnter={() => setHoveredStock(index)}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <span className={`stock-name ${stock.change >= 0 ? 'positive' : 'negative'}`}>{stock.name}</span>
            {hoveredStock === index ? (
              <div className="stock-actions">
                <button className="btn-buy">B</button>
                <button className="btn-sell">S</button>
                <button className="btn-chart">📊</button>
                <button className="btn-percent">%</button>
                <button className="btn-delete">🗑️</button>
              </div>
            ) : (
              <>
                <span className={`stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`}>
                  <span style={{ marginRight: '3px' }}>{stock.change >= 0 ? '▲' : '▼'}</span>
                  {stock.change >= 0 ? '+' : ''}{stock.percent}%
                </span>
                <span className="stock-price">{stock.price.toFixed(2)}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watchlist;
