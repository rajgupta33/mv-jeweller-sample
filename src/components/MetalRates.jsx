import React from 'react';
import './MetalRates.css';

function MetalRates() {
  return (
    <div className="metal-rates-wrapper">
      <div className="container metal-rates-container">
        <div className="rate-ticker">
          <span className="rate-icon">⚖</span>
          <span className="rate-label">TODAY'S RATES:</span>
          
          <span className="metal-name">GOLD</span>
          <span className="metal-price">₹98,420/10g</span>
          <span className="rate-movement up">▲</span>
          
          <span className="rate-divider">|</span>
          
          <span className="metal-name">SILVER</span>
          <span className="metal-price">₹1,08,750/kg</span>
          <span className="rate-movement down">▼</span>
        </div>
      </div>
    </div>
  );
}

export default MetalRates;
