import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { dummyProducts } from '../data/dummy';
import './Search.css';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  };

  // Dummy search logic
  const results = initialQuery 
    ? dummyProducts.filter(p => p.name.toLowerCase().includes(initialQuery.toLowerCase()) || p.category.toLowerCase().includes(initialQuery.toLowerCase()))
    : [];

  return (
    <div className="search-page">
      <div className="container">
        
        <div className="search-header">
          <h1 className="search-title">What are you looking for?</h1>
          <form className="search-form" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search jewellery, collections or gifts..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-submit">Search</button>
          </form>
        </div>

        {initialQuery && results.length > 0 && (
          <div className="search-results">
            <div className="search-results-header">
              <h2>Search Results for "{initialQuery}"</h2>
              <span className="search-count">{results.length} results</span>
            </div>
            <ProductGrid products={results} />
          </div>
        )}

        {initialQuery && results.length === 0 && (
          <div className="search-empty">
            <h2>We couldn't find that piece.</h2>
            <p>Try another search or explore our most-loved collections.</p>
            <div className="search-empty-actions">
              <a href="/collections/new-arrivals" className="btn btn-primary">SHOP NEW ARRIVALS</a>
              <a href="/collections/silver-jewellery" className="btn btn-outline">EXPLORE SILVER</a>
            </div>
          </div>
        )}

        {!initialQuery && (
          <div className="search-suggestions">
            <h3>Related Searches</h3>
            <div className="suggestion-tags">
              <button onClick={() => {setQuery('925 Silver Rings'); setSearchParams({q: '925 Silver Rings'});}}>925 Silver Rings</button>
              <button onClick={() => {setQuery('Green Stone Rings'); setSearchParams({q: 'Green Stone Rings'});}}>Green Stone Rings</button>
              <button onClick={() => {setQuery('Silver Jewellery'); setSearchParams({q: 'Silver Jewellery'});}}>Silver Jewellery</button>
              <button onClick={() => {setQuery('Gifts Under ₹5,000'); setSearchParams({q: 'Gifts Under ₹5,000'});}}>Gifts Under ₹5,000</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Search;
