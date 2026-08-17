import React from 'react';
import './Hero.css';
import { getImageUrl } from '../utils/image-util';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid container">
        
        {/* Top Image Side */}
        <div className="hero-image-wrapper">
          <picture>
            <source media="(max-width: 1023px)" srcSet={getImageUrl("/banner-mobile.png")} />
            <source media="(min-width: 1024px)" srcSet={getImageUrl("/banner-image.png")} />
            <img src={getImageUrl("/banner-image.png")} alt="Modern Silver Jewellery Collection" className="hero-image" />
          </picture>
          <div className="hero-gradient-overlay"></div>
        </div>
        
        {/* Floating Content Card */}
        <div className="hero-content">
          <div className="hero-eyebrow">TIMELESS ELEGANCE</div>
          <h1 className="hero-title">
            Modern Jewellery,<br />
            Crafted to Shine
          </h1>
          <p className="hero-text">
            Discover beautifully crafted silver and gold jewellery designed to make everyday moments feel extraordinary.
          </p>
          
          <div className="hero-ctas">
            <a href="/collections/silver-jewellery" className="btn-primary">SHOP SILVER</a>
            <a href="/collections/gold-jewellery" className="btn-outline-light hero-gold-btn">EXPLORE GOLD</a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            925 Sterling Silver
          </div>
          <div className="trust-item">
            <span className="trust-icon">✦</span>
            Premium Craftsmanship
          </div>
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            Secure Shopping
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
