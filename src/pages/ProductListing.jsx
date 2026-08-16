import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductGrid from '../components/ProductGrid';
import { dummyProducts, dummyCollections } from '../data/dummy';
import './ProductListing.css';

function ProductListing() {
  const { id } = useParams();
  
  // Basic dummy data matching
  const collection = dummyCollections.find(c => c.id === id) || {
    id: id || 'all',
    title: id ? id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'All Jewellery',
    description: 'Discover our complete collection of fine jewellery.',
    count: dummyProducts.length
  };

  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const breadcrumbItems = [
    { label: collection.title, link: `/collections/${collection.id}` }
  ];

  return (
    <div className="plp-page">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="plp-header">
          <div className="plp-header-content">
            <h1 className="plp-title">{collection.title}</h1>
            <p className="plp-desc">{collection.description}</p>
          </div>
        </div>

        <div className="plp-controls">
          <span className="plp-count">{collection.count} Designs</span>
          
          <div className="plp-actions">
            <button className="btn-filter-mobile" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
              FILTER
            </button>
            <div className="plp-sort">
              <label htmlFor="sort">SORT BY:</label>
              <select 
                id="sort" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">FEATURED</option>
                <option value="newest">NEWEST</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
                <option value="best-selling">BEST SELLING</option>
              </select>
            </div>
          </div>
        </div>

        <div className="plp-layout">
          {/* Desktop Sidebar Filters */}
          <aside className={`plp-sidebar ${isMobileFilterOpen ? 'open' : ''}`}>
            <div className="filter-group">
              <h3 className="filter-title">PRICE</h3>
              <label className="filter-option"><input type="checkbox" /> Under ₹2,000</label>
              <label className="filter-option"><input type="checkbox" /> ₹2,000–₹5,000</label>
              <label className="filter-option"><input type="checkbox" /> ₹5,000–₹10,000</label>
              <label className="filter-option"><input type="checkbox" /> ₹10,000+</label>
            </div>
            
            <div className="filter-group">
              <h3 className="filter-title">METAL</h3>
              <label className="filter-option"><input type="checkbox" /> 925 Sterling Silver</label>
              <label className="filter-option"><input type="checkbox" /> Gold</label>
            </div>
            
            <div className="filter-group">
              <h3 className="filter-title">CATEGORY</h3>
              <label className="filter-option"><input type="checkbox" /> Rings</label>
              <label className="filter-option"><input type="checkbox" /> Necklaces</label>
              <label className="filter-option"><input type="checkbox" /> Earrings</label>
              <label className="filter-option"><input type="checkbox" /> Bracelets</label>
            </div>
            
            <div className="filter-group">
              <h3 className="filter-title">STYLE</h3>
              <label className="filter-option"><input type="checkbox" /> Minimal</label>
              <label className="filter-option"><input type="checkbox" /> Classic</label>
              <label className="filter-option"><input type="checkbox" /> Floral</label>
              <label className="filter-option"><input type="checkbox" /> Statement</label>
            </div>
          </aside>

          {/* Main Grid */}
          <main className="plp-main">
            <ProductGrid products={dummyProducts} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
