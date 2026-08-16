import React from 'react';
import './CategoryGrid.css';

const categories = [
  {
    title: 'RINGS',
    subtitle: 'Timeless Elegance',
    image: '/product sku/ChatGPT Image Aug 16, 2026, 12_25_43 PM (2).png',
    link: '/collections/rings'
  },
  {
    title: 'NECKLACES',
    subtitle: 'Grace in Every Detail',
    image: '/product sku/ChatGPT Image Aug 16, 2026, 12_25_44 PM (5).png',
    link: '/collections/necklaces'
  },
  {
    title: 'EARRINGS',
    subtitle: 'Subtle. Stylish. Stunning.',
    image: '/product sku/ChatGPT Image Aug 16, 2026, 12_25_45 PM (6).png',
    link: '/collections/earrings'
  },
  {
    title: 'BRACELETS',
    subtitle: 'Effortless Sophistication',
    image: '/product sku/ChatGPT Image Aug 16, 2026, 12_26_16 PM (1).png',
    link: '/collections/bracelets'
  }
];

function CategoryGrid() {
  return (
    <section className="category-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-decoration">❦</div>
          <h2 className="section-title">SHOP BY CATEGORY</h2>
          <div className="section-decoration">❦</div>
        </div>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <a href={cat.link} key={index} className="category-card">
              <div className="category-image-wrapper">
                <img src={cat.image} alt={cat.title} className="category-image" />
              </div>
              <div className="category-content">
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-subtitle">{cat.subtitle}</p>
                <div className="category-arrow">→</div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoryGrid;
