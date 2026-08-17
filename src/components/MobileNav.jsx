import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Search, Heart, User } from 'lucide-react';
import './MobileNav.css';

function MobileNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="mobile-nav">
      <Link to="/" className={`mobile-nav-item ${path === '/' ? 'active' : ''}`}>
        <Home size={20} strokeWidth={1.5} />
        <span>HOME</span>
      </Link>
      <Link to="/collections" className={`mobile-nav-item ${path.startsWith('/collections') ? 'active' : ''}`}>
        <LayoutGrid size={20} strokeWidth={1.5} />
        <span>CATEGORIES</span>
      </Link>
      <Link to="/search" className={`mobile-nav-item ${path === '/search' ? 'active' : ''}`}>
        <Search size={20} strokeWidth={1.5} />
        <span>SEARCH</span>
      </Link>
      <Link to="/wishlist" className={`mobile-nav-item ${path === '/wishlist' ? 'active' : ''}`}>
        <Heart size={20} strokeWidth={1.5} />
        <span>WISHLIST</span>
      </Link>
      <Link to="/account" className={`mobile-nav-item ${path === '/account' ? 'active' : ''}`}>
        <User size={20} strokeWidth={1.5} />
        <span>ACCOUNT</span>
      </Link>
    </nav>
  );
}

export default MobileNav;
