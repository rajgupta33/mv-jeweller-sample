import React from 'react';
import { Home, LayoutGrid, Search, Heart, User } from 'lucide-react';
import './MobileNav.css';

function MobileNav() {
  return (
    <nav className="mobile-nav">
      <a href="/" className="mobile-nav-item active">
        <Home size={20} strokeWidth={1.5} />
        <span>HOME</span>
      </a>
      <a href="/collections" className="mobile-nav-item">
        <LayoutGrid size={20} strokeWidth={1.5} />
        <span>CATEGORIES</span>
      </a>
      <a href="/search" className="mobile-nav-item">
        <Search size={20} strokeWidth={1.5} />
        <span>SEARCH</span>
      </a>
      <a href="/wishlist" className="mobile-nav-item">
        <Heart size={20} strokeWidth={1.5} />
        <span>WISHLIST</span>
      </a>
      <a href="/account" className="mobile-nav-item">
        <User size={20} strokeWidth={1.5} />
        <span>ACCOUNT</span>
      </a>
    </nav>
  );
}

export default MobileNav;
