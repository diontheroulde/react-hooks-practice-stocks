import React from "react";

function Stock({ stock }) {
  const { ticker, name, price } = stock

  return (
    <div>
      <div className="card">
        <button className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{ticker}:{price}</p>
        </button>
      </div>
    </div>
  );
}
export default Stock;
