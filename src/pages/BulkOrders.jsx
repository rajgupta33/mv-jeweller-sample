import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Gift, HeartHandshake, Briefcase, Sparkles, X, Plus, Minus } from 'lucide-react';
import { dummyProducts } from '../data/dummy';
import { getImageUrl } from '../utils/image-util';
import './BulkOrders.css';

function BulkOrders() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requestId, setRequestId] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    mobile: '',
    email: '',
    orderType: '',
    quantity: '',
    city: '',
    state: '',
    requiredDate: '',
    budgetRange: '',
    preferredType: '',
    needsProductHelp: false,
    packaging: '',
    customBranding: false,
    giftMessage: false,
    packagingNotes: '',
    gstin: '',
    businessName: '',
    businessType: '',
    notes: '',
    contactConsent: false,
    marketingConsent: false
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Derived state
  const totalQuantity = selectedProducts.reduce((sum, p) => sum + p.quantity, 0);
  const requiresBusinessFields = formData.orderType === 'Corporate Gifting' || formData.orderType === 'Retail / Reseller';

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCardSelect = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Product Picker Logic
  const handleAddProduct = (product, qty) => {
    if (qty <= 0) return;
    setSelectedProducts(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: qty } : p);
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const filteredDummyProducts = dummyProducts.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mock ID
    const randomId = Math.floor(10000 + Math.random() * 90000);
    setRequestId(`MV-BULK-${randomId}`);
    
    // Simulate API call
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsSubmitted(true);
    }, 600);
  };

  // Sticky Mobile CTA visibility
  const [showMobileCta, setShowMobileCta] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isSubmitted) {
        setShowMobileCta(true);
      } else {
        setShowMobileCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSubmitted]);

  if (isSubmitted) {
    return (
      <div className="bulk-page">
        <div className="success-view">
          <div className="success-icon">
            <Sparkles size={40} />
          </div>
          <h3>Request Received</h3>
          <h2>Thank You for Choosing M.V Ornaments</h2>
          <p>We've received your bulk-order requirement. Our team will review the products, quantities, availability and requested timeline before contacting you.</p>
          
          <div className="success-box">
            <div className="sb-id">{requestId}</div>
            <div className="sb-row">
              <span className="summary-label">Order Type</span>
              <span className="summary-value">{formData.orderType || 'Not specified'}</span>
            </div>
            <div className="sb-row">
              <span className="summary-label">Quantity</span>
              <span className="summary-value">{formData.needsProductHelp ? formData.quantity : `${totalQuantity} Pieces`}</span>
            </div>
            <div className="sb-row">
              <span className="summary-label">Designs</span>
              <span className="summary-value">{formData.needsProductHelp ? 'To be curated' : selectedProducts.length}</span>
            </div>
          </div>

          <p style={{ fontSize: '14px', marginBottom: '40px' }}>Keep this reference number for future communication.</p>

          <div className="success-actions">
            <Link to="/" className="bulk-btn-primary">CONTINUE SHOPPING</Link>
            <Link to="/collections/new-arrivals" className="bulk-btn-secondary" style={{color: '#191918'}}>VIEW NEW ARRIVALS &rarr;</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bulk-page">
      {/* Hero Section */}
      <section className="bulk-hero">
        <div className="bulk-hero-bg"></div>
        <div className="bulk-hero-gradient"></div>
        <div className="bulk-hero-content">
          <span className="bulk-hero-eyebrow">FOR BUSINESS & CELEBRATIONS</span>
          <h1 className="bulk-hero-title">Bulk & Corporate<br/>Jewellery Orders</h1>
          <p className="bulk-hero-text">
            Thoughtfully curated jewellery for corporate gifting, weddings, celebrations, retail requirements and larger quantity purchases.
          </p>
          <div className="bulk-hero-ctas">
            <a href="#quote-form" className="bulk-btn-primary">REQUEST A BULK QUOTE</a>
            <a href="https://wa.me/917983537543" target="_blank" rel="noopener noreferrer" className="bulk-btn-secondary">TALK TO OUR TEAM &rarr;</a>
          </div>
          <div className="bulk-hero-tags">
            Corporate Gifting &bull; Weddings &bull; Retail Partners &bull; Large Orders
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bulk-intro">
        <h2>Jewellery for Every Scale of Celebration</h2>
        <p className="bulk-intro-text">
          Whether you're planning employee gifts, wedding favours, a festive campaign, a retail requirement or a large personal purchase, our team can help you select products, quantities, packaging and pricing suited to your requirement.
        </p>
        <div className="bulk-intro-grid">
          <div className="intro-card">
            <Briefcase size={28} strokeWidth={1.5} className="intro-icon" />
            <h3>Corporate Gifting</h3>
            <p>Employee rewards, client gifts and business celebrations</p>
          </div>
          <div className="intro-card">
            <HeartHandshake size={28} strokeWidth={1.5} className="intro-icon" />
            <h3>Weddings & Events</h3>
            <p>Jewellery for wedding gifting and special occasions</p>
          </div>
          <div className="intro-card">
            <Gift size={28} strokeWidth={1.5} className="intro-icon" />
            <h3>Retail & Resellers</h3>
            <p>Volume requirements for approved business partners</p>
          </div>
          <div className="intro-card">
            <Sparkles size={28} strokeWidth={1.5} className="intro-icon" />
            <h3>Large Personal Orders</h3>
            <p>Special assistance for larger family or celebration purchases</p>
          </div>
        </div>
      </section>

      {/* Main Form Layout */}
      <section className="bulk-main" id="quote-form">
        <div className="bulk-form-header">
          <h2>Tell Us What You Need</h2>
          <p>Share a few details about your requirement. Our team will review your request and contact you with product availability, pricing and the next steps.</p>
          <span className="bulk-form-note">Fields marked * are required.</span>
        </div>

        <div className="bulk-layout">
          
          {/* Form Column */}
          <div className="bulk-form-column">
            <form onSubmit={handleSubmit}>
              
              {/* Section: Your Details */}
              <div className="bulk-section">
                <h3>Contact Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="form-input" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Company / Organisation</label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="form-input" placeholder="Company name, if applicable" />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number *</label>
                    <div style={{display: 'flex', gap: '8px'}}>
                      <input type="text" value="+91" disabled className="form-input" style={{width: '60px', textAlign: 'center', padding: '0'}} />
                      <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} className="form-input" placeholder="Enter mobile number" style={{flex: 1}} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" placeholder="name@example.com" required />
                  </div>
                </div>
              </div>

              {/* Section: Your Requirement */}
              <div className="bulk-section">
                <h3>Requirement</h3>
                
                <div className="form-group" style={{marginBottom: '24px'}}>
                  <label style={{marginBottom: '8px', display: 'block'}}>Order Type *</label>
                  <div className="cards-grid">
                    {['Corporate Gifting', 'Wedding / Event', 'Retail / Reseller', 'Large Personal Order', 'Other'].map(type => (
                      <div 
                        key={type} 
                        className={`selectable-card ${formData.orderType === type ? 'selected' : ''}`}
                        onClick={() => handleCardSelect('orderType', type)}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Expected Quantity *</label>
                    <select name="quantity" value={formData.quantity} onChange={handleInputChange} className="form-select" required>
                      <option value="">Select quantity</option>
                      <option value="10-24">10–24</option>
                      <option value="25-50">25–50</option>
                      <option value="51-100">51–100</option>
                      <option value="101-250">101–250</option>
                      <option value="251-500">251–500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Required By</label>
                    <input type="date" name="requiredDate" value={formData.requiredDate} onChange={handleInputChange} className="form-input" />
                    <span className="form-helper">Providing your expected date helps us confirm availability.</span>
                  </div>
                  <div className="form-group">
                    <label>City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="form-input" placeholder="Enter delivery city" required />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="form-input" placeholder="Enter state" />
                  </div>
                </div>
              </div>

              {/* Section: Products */}
              <div className="bulk-section">
                <h3>Products</h3>
                
                <div className="checkbox-group">
                  <input type="checkbox" id="needsHelp" name="needsProductHelp" checked={formData.needsProductHelp} onChange={handleInputChange} />
                  <label htmlFor="needsHelp">I need help choosing the products</label>
                </div>

                {formData.needsProductHelp ? (
                  <div className="form-grid" style={{marginTop: '24px', animation: 'fadeIn 0.3s ease'}}>
                    <div className="form-group">
                      <label>Preferred Budget Per Piece</label>
                      <select name="budgetRange" value={formData.budgetRange} onChange={handleInputChange} className="form-select">
                        <option value="">Select budget range</option>
                        <option value="Under ₹1,500">Under ₹1,500</option>
                        <option value="₹1,500–₹2,500">₹1,500–₹2,500</option>
                        <option value="₹2,500–₹5,000">₹2,500–₹5,000</option>
                        <option value="₹5,000+">₹5,000+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Preferred Jewellery Type</label>
                      <select name="preferredType" value={formData.preferredType} onChange={handleInputChange} className="form-select">
                        <option value="">Select preference</option>
                        <option value="Any">Any</option>
                        <option value="Necklaces">Necklaces</option>
                        <option value="Rings">Rings</option>
                        <option value="Earrings">Earrings</option>
                        <option value="Bracelets">Bracelets</option>
                        <option value="Gift Sets">Gift Sets</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div style={{marginTop: '24px'}}>
                    {selectedProducts.length > 0 && (
                      <div className="selected-products-list">
                        {selectedProducts.map(p => (
                          <div key={p.id} className="selected-product-item">
                            <img src={getImageUrl(p.image)} alt={p.name} className="sp-image" />
                            <div className="sp-details">
                              <div className="sp-title">{p.name}</div>
                              <div className="sp-meta">{p.metal}</div>
                            </div>
                            <div className="sp-actions">
                              <span className="sp-qty">Qty {p.quantity}</span>
                              <button type="button" className="sp-btn" onClick={() => { setIsPickerOpen(true); setSearchQuery(p.name); }}>Edit</button>
                              <button type="button" className="sp-btn" onClick={() => handleRemoveProduct(p.id)}>Remove</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <button type="button" className="add-product-btn" onClick={() => setIsPickerOpen(true)}>
                      + ADD {selectedProducts.length > 0 ? 'ANOTHER ' : ''}PRODUCT
                    </button>
                    
                    {selectedProducts.length > 0 && (
                      <div className="bulk-pricing-note">
                        Bulk pricing will be provided after review.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Section: Packaging */}
              <div className="bulk-section">
                <h3>Packaging & Personalisation</h3>
                
                <div className="form-group" style={{marginBottom: '24px'}}>
                  <label style={{marginBottom: '8px', display: 'block'}}>Do you require special packaging?</label>
                  <div className="cards-grid">
                    {['Standard M.V Packaging', 'Premium Gift Packaging', 'Custom / Branded Packaging', 'Not Sure'].map(pkg => (
                      <div 
                        key={pkg} 
                        className={`selectable-card ${formData.packaging === pkg ? 'selected' : ''}`}
                        onClick={() => handleCardSelect('packaging', pkg)}
                      >
                        {pkg}
                      </div>
                    ))}
                  </div>
                </div>

                {formData.packaging === 'Custom / Branded Packaging' && (
                  <div className="form-grid" style={{marginBottom: '24px', animation: 'fadeIn 0.3s ease'}}>
                    <div className="form-group">
                      <label>Brand Logo Required?</label>
                      <select name="customBranding" value={formData.customBranding} onChange={handleInputChange} className="form-select">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Gift Message / Card?</label>
                      <select name="giftMessage" value={formData.giftMessage} onChange={handleInputChange} className="form-select">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label>Additional Packaging Notes</label>
                  <textarea name="packagingNotes" value={formData.packagingNotes} onChange={handleInputChange} className="form-textarea" placeholder="Tell us about colours, branding, gift cards or other requirements..."></textarea>
                </div>
              </div>

              {/* Section: Business Details (Conditional) */}
              {requiresBusinessFields && (
                <div className="bulk-section" style={{animation: 'fadeIn 0.3s ease'}}>
                  <h3>Business Details</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Business Name</label>
                      <input type="text" name="businessName" value={formData.businessName} onChange={handleInputChange} className="form-input" placeholder="Registered business name" />
                    </div>
                    <div className="form-group">
                      <label>Business Type</label>
                      <select name="businessType" value={formData.businessType} onChange={handleInputChange} className="form-select">
                        <option value="">Select type</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>GSTIN</label>
                      <input type="text" name="gstin" value={formData.gstin} onChange={handleInputChange} className="form-input" placeholder="Enter GSTIN, if applicable" />
                    </div>
                  </div>
                </div>
              )}

              {/* Section: Additional Notes */}
              <div className="bulk-section">
                <h3>Anything Else We Should Know?</h3>
                <div className="form-group">
                  <textarea 
                    name="notes" 
                    value={formData.notes} 
                    onChange={handleInputChange} 
                    className="form-textarea" 
                    placeholder="Tell us about your preferred designs, budget, delivery location, custom packaging or any other requirement."
                    maxLength={1000}
                  ></textarea>
                  {formData.notes.length > 0 && (
                    <div style={{textAlign: 'right', fontSize: '12px', color: 'var(--bulk-text-muted)', marginTop: '4px'}}>
                      {formData.notes.length} / 1000
                    </div>
                  )}
                </div>
              </div>

              {/* Consent & Submit */}
              <div className="bulk-section" style={{background: 'transparent', border: 'none', padding: '0 0 32px 0'}}>
                <div className="checkbox-group">
                  <input type="checkbox" id="contactConsent" name="contactConsent" checked={formData.contactConsent} onChange={handleInputChange} required />
                  <label htmlFor="contactConsent">I agree to be contacted by M.V Ornaments regarding this bulk-order request.</label>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" id="marketingConsent" name="marketingConsent" checked={formData.marketingConsent} onChange={handleInputChange} />
                  <label htmlFor="marketingConsent">Send me updates about new collections and offers.</label>
                </div>
                
                <button type="submit" className="bulk-btn-primary" style={{width: '100%', height: '60px', fontSize: '15px', marginTop: '24px'}}>
                  REQUEST MY QUOTE
                </button>
                <p style={{textAlign: 'center', fontSize: '13px', color: 'var(--bulk-text-muted)', marginTop: '16px'}}>
                  No payment is required at this stage. Our team will review your requirement before sharing pricing and availability.
                </p>
              </div>

            </form>
          </div>

          {/* Summary Column (Desktop) */}
          <div className="bulk-summary-column hide-mobile-summary">
            <div className="summary-card">
              <h3>Your Bulk Request</h3>
              
              <div className="summary-details">
                <div className="summary-row">
                  <span className="summary-label">Order Type</span>
                  <span className="summary-value">{formData.orderType || '—'}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Products</span>
                  <span className="summary-value">
                    {formData.needsProductHelp ? 'Need help choosing' : (selectedProducts.length > 0 ? `${selectedProducts.length} Designs` : '—')}
                  </span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Est. Quantity</span>
                  <span className="summary-value">{formData.quantity || '—'}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Required By</span>
                  <span className="summary-value">{formData.requiredDate ? new Date(formData.requiredDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'short'}) : '—'}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Packaging</span>
                  <span className="summary-value">{formData.packaging || '—'}</span>
                </div>
              </div>

              <button type="button" onClick={(e) => { e.preventDefault(); document.querySelector('form').requestSubmit(); }} className="bulk-btn-primary summary-submit">
                REQUEST QUOTE
              </button>
              
              <div className="summary-help">
                Need help before submitting? <br/>
                <a href="https://wa.me/917983537543" target="_blank" rel="noopener noreferrer">Talk to M.V &rarr;</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className={`mobile-sticky-cta ${showMobileCta ? 'visible' : ''}`}>
        <div className="ms-info">
          {formData.quantity || 'Bulk Request'}
        </div>
        <button type="button" onClick={() => document.querySelector('form').requestSubmit()} className="bulk-btn-primary ms-btn">
          REQUEST QUOTE
        </button>
      </div>

      {/* Product Picker Modal */}
      {isPickerOpen && (
        <div className="picker-overlay" onClick={() => setIsPickerOpen(false)}>
          <div className="picker-modal" onClick={e => e.stopPropagation()}>
            <div className="picker-header">
              <h3>Select Products</h3>
              <button className="picker-close" onClick={() => setIsPickerOpen(false)}><X size={24} /></button>
            </div>
            <div className="picker-search">
              <input 
                type="text" 
                placeholder="Search jewellery..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="picker-list">
              {filteredDummyProducts.map(product => {
                const existing = selectedProducts.find(p => p.id === product.id);
                const qty = existing ? existing.quantity : 0;
                
                return (
                  <div key={product.id} className={`picker-item ${qty > 0 ? 'selected' : ''}`}>
                    <img src={getImageUrl(product.image)} alt={product.name} className="picker-item-img" />
                    <div className="picker-item-info">
                      <div className="picker-item-title">{product.name}</div>
                      <div className="picker-item-meta">{product.metal}</div>
                    </div>
                    <div className="picker-item-qty">
                      <button className="qty-btn" onClick={() => handleAddProduct(product, Math.max(0, qty - 5))}><Minus size={14} /></button>
                      <span className="qty-val">{qty > 0 ? qty : 0}</span>
                      <button className="qty-btn" onClick={() => handleAddProduct(product, qty === 0 ? 25 : qty + 5)}><Plus size={14} /></button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="picker-footer">
              <button type="button" className="bulk-btn-primary" style={{width: '100%'}} onClick={() => setIsPickerOpen(false)}>
                DONE
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default BulkOrders;
