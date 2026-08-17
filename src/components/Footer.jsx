import React from 'react';
import './Footer.css';
import { getImageUrl } from '../utils/image-util';

const Instagram = ({ size = 20, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 20, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Twitter = ({ size = 20, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 10c.5.3 1 .4 1.5.4-1.8-1.2-2.3-3.9-1-5.9 2 2.4 5 4 8.5 4.2-.5-4 4.5-6.5 7-4.1 1.5-.3 3-1.1 4-2-.4 1.5-1.5 2.8-2.8 3.5.8-.1 1.5-.3 2.2-.6z"/>
  </svg>
);

const WhatsApp = ({ size = 20, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="/" className="logo footer-logo">
              <img src={getImageUrl("/mv-transparent-logo.png")} alt="M.V Ornaments" className="logo-img" />
              <div className="logo-text">
                <span className="logo-title">M.V ORNAMENTS</span>
                <span className="logo-subtitle">QUALITY WITH CREATIVITY</span>
              </div>
            </a>
            <div className="social-links">
              <a href="https://www.instagram.com/m_v_ornaments" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="https://wa.me/917983537543" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsApp size={20} strokeWidth={1.5} /></a>
              <a href="https://facebook.com" aria-label="Facebook"><Facebook size={20} strokeWidth={1.5} /></a>
              <a href="https://twitter.com" aria-label="Twitter"><Twitter size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">SHOP</h4>
            <ul className="footer-links">
              <li><a href="/collections/all">All Jewellery</a></li>
              <li><a href="/collections/silver-jewellery">Silver</a></li>
              <li><a href="/collections/gold-jewellery">Gold</a></li>
              <li><a href="/collections/new-arrivals">New Arrivals</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">HELP</h4>
            <ul className="footer-links">
              <li><a href="/pages/faqs">FAQs</a></li>
              <li><a href="/pages/shipping">Shipping</a></li>
              <li><a href="/pages/returns">Returns</a></li>
              <li><a href="/pages/size-guide">Size Guide</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">ABOUT</h4>
            <ul className="footer-links">
              <li><a href="/pages/our-story">Our Story</a></li>
              <li><a href="/pages/craftsmanship">Craftsmanship</a></li>
              <li><a href="/pages/care-guide">Care Guide</a></li>
              <li><a href="/pages/contact">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} M.V Ornaments. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="/pages/privacy-policy">Privacy Policy</a>
            <a href="/pages/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
