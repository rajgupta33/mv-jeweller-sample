import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image-util';
import './Maintenance.css';

function Maintenance() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-card">
        <img 
          src={getImageUrl('/mv-transparent-logo.png')} 
          alt="MV Ornaments Logo" 
          className="maintenance-logo"
        />
        <h1 className="maintenance-heading">We're Crafting Something Beautiful</h1>
        <p className="maintenance-subheading">
          This page is currently being polished to perfection. We'll be back shortly.
        </p>
        <p className="maintenance-note">Thank you for your patience.</p>
        <div className="maintenance-actions">
          <Link to="/" className="maintenance-btn secondary">RETURN HOME</Link>
          <Link to="/collections/all" className="maintenance-btn primary">EXPLORE COLLECTIONS</Link>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
