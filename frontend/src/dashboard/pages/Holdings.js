import React from "react";

const holdingsData = [
  { instrument: "BHARTIARTL", qty: 2, avgCost: 538.05, ltp: 541.15, curVal: 1082.30, pnl: 6.20, netChg: "+0.58%", dayChg: "+0.60%" },
  { instrument: "HDFCBANK", qty: 2, avgCost: 1383.40, ltp: 1522.35, curVal: 3044.70, pnl: 277.90, netChg: "+10.04%", dayChg: "+0.80%" },
  { instrument: "HINDUNILVR", qty: 1, avgCost: 2335.85, ltp: 2417.40, curVal: 2417.40, pnl: 81.55, netChg: "+3.49%", dayChg: "+0.50%" },
  { instrument: "INFY", qty: 1, avgCost: 1350.50, ltp: 1555.45, curVal: 1555.45, pnl: 204.95, netChg: "+15.18%", dayChg: "+1.20%" },
  { instrument: "ITC", qty: 5, avgCost: 202.00, ltp: 207.90, curVal: 1039.50, pnl: 29.50, netChg: "+2.92%", dayChg: "+0.40%" },
  { instrument: "KPITTECH", qty: 5, avgCost: 250.30, ltp: 266.45, curVal: 1332.25, pnl: 80.75, netChg: "+6.45%", dayChg: "+0.90%" },
  { instrument: "M&M", qty: 2, avgCost: 809.90, ltp: 779.80, curVal: 1559.60, pnl: -60.20, netChg: "-3.72%", dayChg: "-0.50%" },
  { instrument: "RELIANCE", qty: 1, avgCost: 2193.70, ltp: 2112.40, curVal: 2112.40, pnl: -81.30, netChg: "-3.71%", dayChg: "-0.40%" },
  { instrument: "SBIN", qty: 5, avgCost: 324.35, ltp: 430.20, curVal: 1720.80, pnl: 529.25, netChg: "+16.26%", dayChg: "+1.50%" },
  { instrument: "SGBMAY29", qty: 1, avgCost: 4727.00, ltp: 4719.00, curVal: 4719.00, pnl: -8.00, netChg: "-0.17%", dayChg: "-0.10%" },
  { instrument: "TATAPOWER", qty: 6, avgCost: 104.20, ltp: 124.15, curVal: 620.70, pnl: 119.70, netChg: "+11.49%", dayChg: "+0.80%" },
  { instrument: "TCS", qty: 1, avgCost: 3041.70, ltp: 3194.80, curVal: 3194.80, pnl: 153.10, netChg: "+5.03%", dayChg: "+0.60%" },
  { instrument: "WIPRO", qty: 4, avgCost: 489.30, ltp: 577.75, curVal: 2311.00, pnl: 353.80, netChg: "+7.22%", dayChg: "+0.70%" },
];

function Holdings() {
  return (
    <div className="holdings-container">
      <h5 className="holdings-title">Holdings (13)</h5>
      <div className="holdings-table-wrapper">
        <table className="holdings-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdingsData.map((stock, index) => (
              <tr key={index}>
                <td>{stock.instrument}</td>
                <td>{stock.qty}</td>
                <td>{stock.avgCost.toFixed(2)}</td>
                <td>{stock.ltp.toFixed(2)}</td>
                <td>{stock.curVal.toFixed(2)}</td>
                <td className={stock.pnl >= 0 ? "positive" : "negative"}>
                  {stock.pnl >= 0 ? "+" : ""}{stock.pnl.toFixed(2)}
                </td>
                <td className={stock.netChg.includes("+") ? "positive" : "negative"}>
                  {stock.netChg}
                </td>
                <td className={stock.dayChg.includes("+") ? "positive" : "negative"}>
                  {stock.dayChg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Holdings;
