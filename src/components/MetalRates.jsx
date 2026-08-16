import React from 'react';
import './MetalRates.css';

function MetalRates() {
  return (
    <div className="metal-rates-wrapper">
      <div className="container metal-rates-container">
        
        <div className="rate-title">
          <span className="rate-icon">⚖</span>
          TODAY'S METAL RATES
        </div>

        <div className="rates-content">
          <div className="rate-item">
            <span className="metal-name">GOLD</span>
            <span className="metal-price">₹98,420 / 10g</span>
            <span className="rate-movement up">▲ 0.45%</span>
          </div>

          <div className="rate-divider"></div>

          <div className="rate-item">
            <span className="metal-name">SILVER</span>
            <span className="metal-price">₹1,08,750 / kg</span>
            <span className="rate-movement down">▼ 0.28%</span>
          </div>
        </div>

        <div className="rate-meta">
          <span>MCX • DELAYED • UPDATED 10:30 AM</span>
          <a href="/pages/metal-rates" className="view-rates-link">
            VIEW TODAY'S RATES <span>→</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default MetalRates;
