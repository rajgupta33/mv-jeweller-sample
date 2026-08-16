import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { dummyProducts } from '../data/dummy';
import './Wishlist.css';

function Wishlist() {
  // Dummy wishlist items
  const wishlistItems = dummyProducts.slice(0, 4);

  return (
    <div className="wishlist-page">
      <div className="container">
        
        <div className="wishlist-header">
          <h1 className="wishlist-title">Your Wishlist</h1>
          <p className="wishlist-subtitle">Pieces you've saved for later.</p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="wishlist-grid-wrapper">
            {/* Using ProductGrid as a base, but ideally we'd add "Remove" buttons to the cards here */}
            <ProductGrid products={wishlistItems} />
          </div>
        ) : (
          <div className="wishlist-empty">
            <h2>Your wishlist is waiting.</h2>
            <p>Save the jewellery you love and return whenever you're ready.</p>
            <Link to="/collections/new-arrivals" className="btn btn-primary">EXPLORE NEW ARRIVALS</Link>
          </div>
        )}

      </div>
    </div>
  );
}

export default Wishlist;
