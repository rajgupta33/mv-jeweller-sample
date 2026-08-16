import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid container">
        
        {/* Left Copy Side */}
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

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">✔</span>
              925 Sterling Silver
            </div>
            <div className="trust-item">
              <span className="trust-icon">✧</span>
              Premium Craftsmanship
            </div>
            <div className="trust-item">
              <span className="trust-icon">🔒</span>
              Secure Shopping
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="hero-image-wrapper">
          {/* We use the banner image provided in the root directory */}
          <img src="/banner image.png" alt="Modern Silver Jewellery Collection" className="hero-image" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
