import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-container">
        
        <div className="newsletter-content">
          <h2 className="newsletter-title">STAY CONNECTED</h2>
          <p className="newsletter-text">
            Be the first to know about new arrivals, exclusive offers & more.
          </p>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit" className="btn-primary newsletter-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;
