import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image-util';
import './BulkOrder.css';

function BulkOrder() {
  return (
    <section className="bulk-order-section">
      <div className="container">
        <div className="bulk-order-card">
          <div className="bulk-order-image">
            <img 
              src={getImageUrl("/mv-bulk-order.webp")} 
              alt="Bulk Jewellery Orders" 
              className="bulk-img"
            />
          </div>
          <div className="bulk-order-content">
            <span className="bulk-eyebrow">FOR BUSINESS & CELEBRATIONS</span>
            <h2 className="bulk-title">Bulk & Corporate Jewellery Orders</h2>
            <p className="bulk-text">
              Corporate gifting, weddings, retail requirements or larger purchases - get personalised assistance with products, quantities and packaging.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/pages/bulk-orders" className="btn btn-primary bulk-btn">REQUEST A BULK QUOTE</Link>
              <a href="https://wa.me/917983537543" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--mv-charcoal)', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem', letterSpacing: '0.1em' }}>TALK TO OUR TEAM &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BulkOrder;
