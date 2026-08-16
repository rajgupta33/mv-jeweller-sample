import React from 'react';
import ProductCard from './ProductCard';
import './ProductRail.css';

function ProductRail({ title, subtitle, products, viewAllLink }) {
  return (
    <section className="product-rail-section">
      <div className="container">
        
        <div className="rail-header">
          <div className="rail-header-text">
            <div className="section-decoration">❦</div>
            <h2 className="section-title">{title}</h2>
            <div className="section-decoration">❦</div>
          </div>
          {viewAllLink && (
            <a href={viewAllLink} className="link-arrow hide-mobile">
              View All <span>→</span>
            </a>
          )}
        </div>

        <div className="rail-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {viewAllLink && (
          <div className="rail-mobile-action">
            <a href={viewAllLink} className="btn-outline">
              VIEW ALL
            </a>
          </div>
        )}

      </div>
    </section>
  );
}

export default ProductRail;
