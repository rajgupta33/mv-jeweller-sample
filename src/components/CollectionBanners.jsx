import React from 'react';
import './CollectionBanners.css';
import { getImageUrl } from '../utils/image-util';

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
            <img src={getImageUrl("/mv-banner-silver-refined.webp")} alt="Silver Collection" className="collection-image" />
          </div>
        </div>

        {/* SIARA Banner */}
        <div className="collection-banner siara-banner">
          <div className="collection-content">
            <h2 className="collection-title">
              SIARA BY M.V<br />PREMIUM COLLECTION
            </h2>
            <p className="collection-text">A refined edit of premium pieces.</p>
            <a href="/collections/siara" className="link-arrow collection-link">
              DISCOVER SIARA <span>→</span>
            </a>
          </div>
          <div className="collection-image-wrapper">
            <img src={getImageUrl("/mv-banner-siara.webp")} alt="SIARA Collection" className="collection-image" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default CollectionBanners;
