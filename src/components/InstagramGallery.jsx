import React from 'react';
import './InstagramGallery.css';
import { getImageUrl } from '../utils/image-util';

const InstagramIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Use product images as lifestyle gallery
const galleryImages = [
  getImageUrl("/product-sku/product-8.png"),
  getImageUrl("/product-sku/product-9.png"),
  getImageUrl("/product-sku/product-10.png"),
  getImageUrl("/product-sku/product-11.png"),
  getImageUrl("/product-sku/product-1.png"),
  getImageUrl("/product-sku/product-5.png"),
];

function InstagramGallery() {
  return (
    <section className="instagram-section">
      <div className="container">
        <div className="section-header">
          <div className="section-decoration">❦</div>
          <h2 className="section-title">FOLLOW US</h2>
          <div className="section-decoration">❦</div>
        </div>
        <p className="instagram-handle">
          <InstagramIcon size={18} />
          @mv.ornaments
        </p>

        <div className="instagram-grid">
          {galleryImages.map((img, i) => (
            <a key={i} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-item">
              <img src={img} alt={`MV Ornaments jewellery ${i + 1}`} loading="lazy" />
              <div className="instagram-overlay">
                <InstagramIcon size={24} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramGallery;
