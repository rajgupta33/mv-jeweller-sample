import React from 'react';
import './BrandStory.css';

function BrandStory() {
  return (
    <section className="brand-story-section">
      <div className="container">
        
        <div className="brand-story-box">
          <div className="brand-story-content">
            <h2 className="brand-story-title">Jewellery with Character</h2>
            <p className="brand-story-text">
              At M.V Ornaments, we believe jewellery should feel personal. Our collections bring together contemporary design, fine detailing and thoughtfully selected silver and gold pieces created for everyday expression and special moments alike.
            </p>
            <p className="brand-story-text">
              <strong>Quality With Creativity</strong> is more than our signature — it guides the way we select, present and deliver every M.V piece.
            </p>
            <a href="/pages/about" className="link-arrow">
              DISCOVER OUR STORY <span>→</span>
            </a>
          </div>
          
          <div className="brand-story-image-wrapper">
            {/* Example image from the sku folder for the brand story */}
            <img src="/product-sku/product-1.png" alt="M.V Ornaments Craftsmanship" className="brand-story-image" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default BrandStory;
