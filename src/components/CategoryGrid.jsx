import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';
import { getImageUrl } from '../utils/image-util';

const categories = [
  {
    title: 'RINGS',
    subtitle: 'Timeless Elegance',
    image: getImageUrl("/mv-category-rings.webp"),
    link: "/collections/rings"
  },
  {
    title: 'NECKLACES',
    subtitle: 'Grace in Every Detail',
    image: getImageUrl("/mv-category-necklaces.webp"),
    link: "/collections/necklaces"
  },
  {
    title: 'EARRINGS',
    subtitle: 'Subtle. Stylish. Stunning.',
    image: getImageUrl("/mv-category-earrings.webp"),
    link: "/collections/earrings"
  },
  {
    title: 'BRACELETS',
    subtitle: 'Effortless Sophistication',
    image: getImageUrl("/mv-category-bracelets.webp"),
    link: "/collections/bracelets"
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
            <Link to={cat.link} key={index} className="category-card">
              <div className="category-image-wrapper">
                <img src={cat.image} alt={cat.title} className="category-image" />
              </div>
              <div className="category-content">
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-subtitle">{cat.subtitle}</p>
                <div className="category-arrow">→</div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CategoryGrid;
