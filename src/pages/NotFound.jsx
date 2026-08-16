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
            <div className="subtle-image-placeholder"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
