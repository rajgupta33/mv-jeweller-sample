import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import './Header.css';
import { getImageUrl } from '../utils/image-util';

function Header({ onOpenCart }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        
        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="logo">
          <img src={getImageUrl("/mv-transparent-logo.png")} alt="M.V Ornaments" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">M.V ORNAMENTS</span>
            <span className="logo-subtitle">QUALITY WITH CREATIVITY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/collections/new-arrivals" onClick={() => setIsMobileMenuOpen(false)}>NEW IN</Link></li>
            <li><Link to="/collections/silver-jewellery" onClick={() => setIsMobileMenuOpen(false)}>SILVER</Link></li>
            <li><Link to="/collections/gold-jewellery" onClick={() => setIsMobileMenuOpen(false)}>GOLD</Link></li>
            <li><Link to="/collections/rings" onClick={() => setIsMobileMenuOpen(false)}>RINGS</Link></li>
            <li><Link to="/collections/necklaces" onClick={() => setIsMobileMenuOpen(false)}>NECKLACES</Link></li>
            <li><Link to="/collections/earrings" onClick={() => setIsMobileMenuOpen(false)}>EARRINGS</Link></li>
            <li><Link to="/collections/gifts" onClick={() => setIsMobileMenuOpen(false)}>GIFTS</Link></li>
            <li><Link to="/collections/all" onClick={() => setIsMobileMenuOpen(false)}>COLLECTIONS</Link></li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="header-actions">
          <Link to="/search" aria-label="Search"><Search size={20} strokeWidth={1.5} /></Link>
          <Link to="/account" aria-label="Account" className="hide-mobile"><User size={20} strokeWidth={1.5} /></Link>
          <Link to="/wishlist" aria-label="Wishlist"><Heart size={20} strokeWidth={1.5} /></Link>
          <button aria-label="Cart" onClick={onOpenCart}><ShoppingBag size={20} strokeWidth={1.5} /></button>
        </div>

      </div>
    </header>
  );
}

export default Header;
