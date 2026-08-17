import React, { useState, useEffect } from 'react';
import './Hero.css';
import { getImageUrl } from '../utils/image-util';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mobileImages = [
    "/banner-mobile.png",
    "/b2.png",
    "/b3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mobileImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [mobileImages.length]);

  return (
    <section className="hero">
      <div className="hero-grid container">
        
        {/* Top Image Side */}
        <div className="hero-image-wrapper">
          <div className="hero-images-container">
            {/* Desktop Image */}
            <img src={getImageUrl("/banner-image.png")} alt="Modern Silver Jewellery Collection" className="hero-image desktop-only" />
            
            {/* Mobile Images (Slider) */}
            {mobileImages.map((imgSrc, index) => (
              <img 
                key={index}
                src={getImageUrl(imgSrc)} 
                alt={`Slide ${index + 1}`} 
                className={`hero-image mobile-only slide-fade ${index === currentSlide ? 'active' : ''}`} 
              />
            ))}
          </div>
          <div className="hero-gradient-overlay"></div>
          
          {/* Slider Indicators (Mobile Only) */}
          <div className="hero-slider-dots">
            {mobileImages.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
