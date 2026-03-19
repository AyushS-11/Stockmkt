import React from "react";

function Orders() {
  return (
    <div className="orders-container">
      <div className="orders-empty">
        <p className="orders-empty-text">You haven't placed any orders today</p>
        <button className="btn btn-primary orders-btn">Get started</button>
      </div>
    </div>
  );
}

export default Orders;
