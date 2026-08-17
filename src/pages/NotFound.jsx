import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-title">This Piece Seems to Be Missing.</h1>
          <p className="not-found-desc">The page you're looking for may have moved or no longer exists.</p>
          
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">RETURN HOME</Link>
            <Link to="/collections/all" className="btn btn-outline">EXPLORE JEWELLERY</Link>
          </div>
          
          <div className="not-found-image">
            <div className="subtle-image-placeholder">
              <img src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=400&q=80" alt="Missing jewellery piece" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
