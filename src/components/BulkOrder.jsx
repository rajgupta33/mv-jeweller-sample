import React from 'react';
import './BulkOrder.css';

function BulkOrder() {
  return (
    <section className="bulk-order-section">
      <div className="container">
        <div className="bulk-order-card">
          <div className="bulk-order-image">
            <img 
              src="https://images.unsplash.com/photo-1599643478514-4a4208a0d4db?auto=format&fit=crop&w=800&q=80" 
              alt="Bulk Jewellery Orders" 
              className="bulk-img"
            />
          </div>
          <div className="bulk-order-content">
            <span className="bulk-eyebrow">CORPORATE & BULK</span>
            <h2 className="bulk-title">Elevate Your Gifting</h2>
            <p className="bulk-text">
              Whether you are looking for corporate gifts, wedding favors, or bulk orders for special occasions, M.V Ornaments offers tailored solutions with premium craftsmanship.
            </p>
            <a href="mailto:sales@mvornaments.com" className="btn btn-primary bulk-btn">INQUIRE FOR BULK ORDERS</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BulkOrder;
