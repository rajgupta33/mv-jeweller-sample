import React from 'react';
import './GiftBanner.css';
import { getImageUrl } from '../utils/image-util';

function GiftBanner() {
  return (
    <section className="gift-section">
      <div className="container">
        
        <div className="gift-banner">
          <div className="gift-content">
            <div className="gift-eyebrow">THE GIFT EDIT</div>
            <h2 className="gift-title">A Gift They'll Remember</h2>
            <p className="gift-text">
              Beautifully packaged. Thoughtfully delivered. Celebrate birthdays, anniversaries, milestones, and meaningful little moments.
            </p>
            <div className="gift-actions">
              <a href="/collections/gifts" className="btn-primary">EXPLORE GIFTS</a>
            </div>
          </div>
          <div className="gift-image-wrapper">
            {/* Example image from the sku folder for the gift banner */}
            <img src={getImageUrl("/product-sku/product-10.png")} alt="Luxurious Gifts" className="gift-image" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default GiftBanner;
