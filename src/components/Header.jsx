import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, Phone } from 'lucide-react';
import './Header.css';
import { getImageUrl } from '../utils/image-util';

/* Primary IA, per the developer specification (section 4.1). Only routes that
   actually resolve in App.jsx are listed, so nothing here can 404. */
const navItems = [
  { label: 'NEW IN', to: '/collections/new-arrivals' },
  {
    label: 'SILVER JEWELLERY',
    to: '/collections/silver-jewellery',
    children: [
      { label: 'Rings', to: '/collections/rings' },
      { label: 'Necklaces', to: '/collections/necklaces' },
      { label: 'Earrings', to: '/collections/earrings' },
      { label: 'Pendants', to: '/collections/pendants' },
      { label: 'Bracelets', to: '/collections/bracelets' },
      { label: 'Anklets', to: '/collections/anklets' },
      { label: 'Chains', to: '/collections/chains' },
      { label: 'Bangles', to: '/collections/bangles' }
    ]
  },
  { label: 'SIARA', to: '/collections/siara' },
  {
    label: 'SILVER GIFTS',
    to: '/collections/silver-gifts',
    children: [
      { label: 'Gifts & Articles', to: '/collections/silver-gifts' },
      { label: 'Silver Idols', to: '/collections/silver-idols' },
      { label: 'Gifting by Occasion', to: '/collections/gifts' },
      { label: 'Gifting by Budget', to: '/collections/gifts-by-budget' }
    ]
  },
  { label: 'GOLD BULLION', to: '/pages/gold-bullion' },
  {
    label: 'COLLECTIONS',
    to: '/collections',
    children: [
      { label: 'New Arrivals', to: '/collections/new-arrivals' },
      { label: 'Most Loved', to: '/collections/most-loved' },
      { label: 'Everyday', to: '/collections/everyday' },
      { label: 'Festive', to: '/collections/festive' },
      { label: 'Wedding', to: '/collections/wedding' },
      { label: 'SIARA', to: '/collections/siara' }
    ]
  },
  {
    label: 'MORE',
    children: [
      { label: 'Partner With Us', to: '/pages/partner-with-us' },
      { label: 'Bulk & Corporate Orders', to: '/pages/bulk-orders' },
      { label: 'M.V Economy Plan', to: '/pages/economy-plan' },
      { label: 'Our Story', to: '/pages/about' }
    ]
  }
];

function Logo({ className = '' }) {
  return (
    <Link to="/" className={`logo ${className}`}>
      <img
        src={getImageUrl('/mv-logo-mark.webp')}
        alt="M.V Ornaments"
        className="logo-img"
        width="400"
        height="400"
        decoding="async"
      />
      <span className="logo-text">
        <span className="logo-title">M.V ORNAMENTS</span>
        <span className="logo-subtitle">QUALITY WITH CREATIVITY</span>
      </span>
    </Link>
  );
}

function Header({ onOpenCart }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setOpenSection(null);
  };

  // Navigating away should always dismiss the drawer.
  useEffect(closeDrawer, [location.pathname]);

  // Lock the page behind the drawer and wire up Escape.
  useEffect(() => {
    if (!isDrawerOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeDrawer();
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isDrawerOpen]);

  return (
    <header className="header">
      <div className="container header-container">
        <button
          className="header-icon-btn menu-btn"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
          aria-expanded={isDrawerOpen}
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>

        <Logo />

        <nav className="primary-nav" aria-label="Primary">
          <ul className="primary-nav__list">
            {navItems.map((item) => (
              <li key={item.label} className={`primary-nav__item ${item.children ? 'has-menu' : ''}`}>
                {item.to ? (
                  <Link to={item.to} className="primary-nav__link">
                    {item.label}
                    {item.children && <ChevronDown size={13} strokeWidth={2} aria-hidden="true" />}
                  </Link>
                ) : (
                  <span className="primary-nav__link" tabIndex={0} role="button">
                    {item.label}
                    <ChevronDown size={13} strokeWidth={2} aria-hidden="true" />
                  </span>
                )}

                {item.children && (
                  <div className="dropdown">
                    <ul className="dropdown__list">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link to={child.to}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/search" className="header-icon-btn" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/account" className="header-icon-btn hide-mobile" aria-label="Account">
            <User size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/wishlist" className="header-icon-btn hide-mobile" aria-label="Wishlist">
            <Heart size={20} strokeWidth={1.5} />
          </Link>
          <button className="header-icon-btn" aria-label="Cart" onClick={onOpenCart}>
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ---------- Mobile / tablet drawer ---------- */}
      <div
        className={`drawer-backdrop ${isDrawerOpen ? 'is-open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div
        className={`drawer ${isDrawerOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!isDrawerOpen}
      >
        <div className="drawer__head">
          <Logo className="logo--drawer" />
          <button className="drawer__close" onClick={closeDrawer} aria-label="Close menu">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Mobile">
          <ul className="drawer__list">
            {navItems.map((item) => {
              const isOpen = openSection === item.label;

              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link className="drawer__link" to={item.to} tabIndex={isDrawerOpen ? 0 : -1}>
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.label} className={`drawer__section ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="drawer__link drawer__toggle"
                    onClick={() => setOpenSection(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    tabIndex={isDrawerOpen ? 0 : -1}
                  >
                    {item.label}
                    <ChevronDown size={16} strokeWidth={1.75} aria-hidden="true" />
                  </button>

                  {/* Wrapper exists so the 0fr -> 1fr grid collapse has a
                      single child to size; applied to the <ul> directly it
                      only collapses the first row. */}
                  <div className="drawer__subwrap">
                    <ul className="drawer__sublist">
                      {item.to && (
                        <li>
                          <Link to={item.to} tabIndex={isDrawerOpen && isOpen ? 0 : -1}>
                            All {item.label.toLowerCase()}
                          </Link>
                        </li>
                      )}
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link to={child.to} tabIndex={isDrawerOpen && isOpen ? 0 : -1}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="drawer__foot">
          <div className="drawer__quick">
            <Link to="/account" tabIndex={isDrawerOpen ? 0 : -1}>
              <User size={17} strokeWidth={1.5} /> Account
            </Link>
            <Link to="/wishlist" tabIndex={isDrawerOpen ? 0 : -1}>
              <Heart size={17} strokeWidth={1.5} /> Wishlist
            </Link>
          </div>
          <a className="drawer__phone" href="tel:+917983537543" tabIndex={isDrawerOpen ? 0 : -1}>
            <Phone size={16} strokeWidth={1.5} /> +91 79835 37543
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
