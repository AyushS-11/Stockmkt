import React from "react";

const positionsData = [
  { product: "CNC", instrument: "EVEREADY", qty: 2, avg: 316.27, ltp: 312.35, pnl: -7.84, chg: "-1.24%" },
  { product: "CNC", instrument: "JUBLFOOD", qty: 1, avg: 3124.75, ltp: 3082.65, pnl: -42.10, chg: "-1.35%" },
];

function Positions() {
  return (
    <div className="positions-container">
      <h5 className="positions-title">Positions (2)</h5>
      <div className="positions-table-wrapper">
        <table className="positions-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg</th>
            </tr>
          </thead>
          <tbody>
            {positionsData.map((pos, index) => (
              <tr key={index}>
                <td>{pos.product}</td>
                <td><strong>{pos.instrument}</strong></td>
                <td>{pos.qty}</td>
                <td>{pos.avg.toFixed(2)}</td>
                <td>{pos.ltp.toFixed(2)}</td>
                <td className={pos.pnl >= 0 ? "positive" : "negative"}>
                  {pos.pnl >= 0 ? "+" : ""}{pos.pnl.toFixed(2)}
                </td>
                <td className={pos.chg.includes("+") ? "positive" : "negative"}>
                  {pos.chg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Positions;
