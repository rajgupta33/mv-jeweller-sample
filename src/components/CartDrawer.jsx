import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import './CartDrawer.css';
import { dummyProducts } from '../data/dummy';

function CartDrawer({ isOpen, onClose }) {
  // Dummy cart items
  const cartItems = dummyProducts.slice(0, 2).map(p => ({...p, quantity: 1, size: '7'}));
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-title">YOUR BAG</h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-meta">{item.metal}</p>
                <p className="cart-item-meta">Size {item.size}</p>
                <div className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</div>
                
                <div className="cart-qty-controls">
                  <button><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button><Plus size={14} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-subtotal">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <p className="cart-shipping-note">Shipping calculated at checkout</p>
          
          <button className="btn-checkout">SECURE CHECKOUT</button>
          <a href="/cart" className="cart-view-link" onClick={onClose}>View Bag</a>
          
          <div className="cart-trust">
            <span className="cart-trust-item">Secure Payments</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
