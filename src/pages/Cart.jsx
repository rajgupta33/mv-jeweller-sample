import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import './Cart.css';
import { dummyProducts } from '../data/dummy';

function Cart() {
  const [cartItems, setCartItems] = useState(
    dummyProducts.slice(0, 2).map(p => ({...p, quantity: 1, size: '7'}))
  );
  
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-page-title">Your Bag</h1>

        {cartItems.length > 0 ? (
          <div className="cart-layout">
            <div className="cart-main">
              {/* Desktop Header */}
              <div className="cart-table-header">
                <div className="th-product">Product</div>
                <div className="th-quantity">Quantity</div>
                <div className="th-total">Total</div>
              </div>

              {/* Items */}
              <div className="cart-item-list">
                {cartItems.map((item) => (
                  <div className="cart-page-item" key={item.id}>
                    <div className="cart-item-image-wrapper">
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className="cart-item-details-wrapper">
                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>{item.metal}</p>
                        <p>Size: {item.size}</p>
                        <button className="btn-remove-mobile" onClick={() => handleRemove(item.id)}>Remove</button>
                      </div>
                      
                      <div className="cart-item-qty-col">
                        <div className="cart-qty-controls">
                          <button><Minus size={14} /></button>
                          <span>{item.quantity}</span>
                          <button><Plus size={14} /></button>
                        </div>
                        <button className="btn-remove-desktop" onClick={() => handleRemove(item.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="cart-item-total-col">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gift Options */}
              <div className="cart-gift-section">
                <h3>Make It a Gift</h3>
                <label className="gift-checkbox">
                  <input 
                    type="checkbox" 
                    checked={isGift}
                    onChange={(e) => setIsGift(e.target.checked)}
                  />
                  <span>Add gift packaging</span>
                </label>
                
                {isGift && (
                  <div className="gift-message-box">
                    <label>Add a personal message</label>
                    <textarea 
                      value={giftMessage}
                      onChange={(e) => setGiftMessage(e.target.value)}
                      placeholder="Write your message here..."
                      rows="3"
                    ></textarea>
                  </div>
                )}
              </div>
            </div>

            <div className="cart-sidebar">
              <div className="order-summary">
                <h3>Order Summary</h3>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="summary-row">
                  <span>Discount</span>
                  <span>₹0</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                
                <p className="tax-note">Inclusive of applicable taxes.</p>

                <button className="btn-checkout-main">PROCEED TO SECURE CHECKOUT</button>
                
                <div className="checkout-trust">
                  Secure Payments • Quality Checked • Insured Shipping
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <h2>Your bag is empty.</h2>
            <p>Discover our latest designs to find something you'll love.</p>
            <a href="/collections/all" className="btn btn-primary">EXPLORE JEWELLERY</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
