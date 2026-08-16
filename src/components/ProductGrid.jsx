import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductGrid({ products, title, count }) {
  return (
    <div className="product-grid-container">
      {(title || count) && (
        <div className="product-grid-header">
          {title && <h2 className="product-grid-title">{title}</h2>}
          {count !== undefined && <span className="product-grid-count">{count} {count === 1 ? 'Design' : 'Designs'}</span>}
        </div>
      )}
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
