import React from 'react';
import './CollectionBanners.css';

function CollectionBanners() {
  return (
    <section className="collections-section">
      <div className="container collections-container">
        
        {/* Silver Banner */}
        <div className="collection-banner silver-banner">
          <div className="collection-content">
            <h2 className="collection-title">
              SILVER,<br />REFINED & IMAGINED
            </h2>
            <p className="collection-text">Pure. Elegant. Timeless.</p>
            <a href="/collections/silver-jewellery" className="link-arrow collection-link">
              EXPLORE SILVER <span>→</span>
            </a>
          </div>
          <div className="collection-image-wrapper">
            {/* Example fallback if no exact image found, we use one from product sku */}
            <img src="/product-sku/product-7.png" alt="Silver Collection" className="collection-image" />
          </div>
        </div>

        {/* Gold Banner */}
        <div className="collection-banner gold-banner">
          <div className="collection-content">
            <h2 className="collection-title">
              GOLD THAT<br />STAYS WITH YOU
            </h2>
            <p className="collection-text">Precious. Enduring. Yours.</p>
            <a href="/collections/gold-jewellery" className="link-arrow collection-link">
              EXPLORE GOLD <span>→</span>
            </a>
          </div>
          <div className="collection-image-wrapper">
            <img src="/product-sku/product-14.png" alt="Gold Collection" className="collection-image" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default CollectionBanners;
