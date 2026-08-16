import React from 'react';
import './Categories.css';

const categoriesData = [
  { id: 1, name: 'Rings', icon: '💍' },
  { id: 2, name: 'Earrings', icon: '✨' },
  { id: 3, name: 'Necklaces', icon: '📿' },
  { id: 4, name: 'Bracelets', icon: '💎' },
];

const Categories = () => {
  return (
    <section className="categories container">
      <h2 className="section-title">Shop by Category</h2>
      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="category-icon">{cat.icon}</div>
            <h3 className="category-name">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
