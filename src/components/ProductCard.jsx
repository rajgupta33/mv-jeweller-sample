import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import './ProductCard.css';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use second image for hover if available
  const displayImage = isHovered && product.images && product.images.length > 1 
    ? product.images[1] 
    : product.image;

  return (
    <div className="product-card">
      <div 
        className="product-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {product.isNew && <span className="product-badge">NEW</span>}
        <button className="wishlist-btn" aria-label="Add to wishlist">
          <Heart size={20} strokeWidth={1.5} />
        </button>
        <Link to={product.link} className="product-image-link">
          <img 
            src={displayImage} 
            alt={product.name} 
            className="product-image" 
            loading="lazy" 
          />
        </Link>
      </div>
      
      <div className="product-info">
        <Link to={product.link} className="product-name">{product.name}</Link>
        {product.metal && <span className="product-metal">{product.metal}</span>}
        <div className="product-price-row">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.compareAtPrice && (
            <span className="product-compare-price">₹{product.compareAtPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
