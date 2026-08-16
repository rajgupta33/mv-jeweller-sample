import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ChevronDown, ChevronUp, Star, ShieldCheck, Lock, Package, Truck } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ProductRail from '../components/ProductRail';
import { dummyProducts } from '../data/dummy';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  
  // Find product or fallback to first dummy product
  const product = dummyProducts.find(p => p.link.includes(id)) || dummyProducts[0];
  
  const [mainImage, setMainImage] = useState(product.images ? product.images[0] : product.image);
  const [selectedSize, setSelectedSize] = useState('7');
  const [pincode, setPincode] = useState('');
  const [activeAccordion, setActiveAccordion] = useState('details'); // details, dimensions, care, shipping

  const breadcrumbItems = [
    { label: product.metal.includes('Silver') ? 'Silver Jewellery' : 'Jewellery', link: '/collections/all' },
    { label: product.category, link: `/collections/${product.category.toLowerCase()}` },
    { label: product.name, link: product.link }
  ];

  const sizes = ['6', '7', '8', '9'];

  const toggleAccordion = (section) => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
    }
  };

  return (
    <div className="pdp-page">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="pdp-main">
          {/* Gallery Area */}
          <div className="pdp-gallery">
            <div className="pdp-thumbnails">
              {(product.images || [product.image]).map((img, i) => (
                <button 
                  key={i} 
                  className={`pdp-thumb-btn ${mainImage === img ? 'active' : ''}`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt={`${product.name} thumbnail ${i + 1}`} />
                </button>
              ))}
            </div>
            <div className="pdp-main-image">
              <img src={mainImage} alt={product.name} />
            </div>
          </div>

          {/* Info Area */}
          <div className="pdp-info">
            <h1 className="pdp-title">{product.name}</h1>
            
            <div className="pdp-reviews">
              <div className="stars">
                <Star size={16} fill="var(--charcoal)" color="var(--charcoal)" />
                <Star size={16} fill="var(--charcoal)" color="var(--charcoal)" />
                <Star size={16} fill="var(--charcoal)" color="var(--charcoal)" />
                <Star size={16} fill="var(--charcoal)" color="var(--charcoal)" />
                <Star size={16} fill="var(--charcoal)" color="var(--charcoal)" />
              </div>
              <span>(24)</span>
            </div>

            <div className="pdp-pricing">
              <span className="pdp-price">₹{product.price.toLocaleString('en-IN')}</span>
              {product.compareAtPrice && (
                <>
                  <span className="pdp-compare">MRP ₹{product.compareAtPrice.toLocaleString('en-IN')}</span>
                  <span className="pdp-save">You Save ₹{(product.compareAtPrice - product.price).toLocaleString('en-IN')}</span>
                </>
              )}
              <div className="pdp-tax-note">Inclusive of applicable taxes.</div>
            </div>

            <div className="pdp-metal-tag">{product.metal}</div>
            
            <p className="pdp-desc">{product.description}</p>

            {/* Size Selector */}
            <div className="pdp-sizes">
              <div className="pdp-sizes-header">
                <span className="pdp-size-label">SELECT SIZE</span>
                <button className="pdp-size-guide-btn">Size Guide</button>
              </div>
              <div className="pdp-size-options">
                {sizes.map(size => (
                  <button 
                    key={size} 
                    className={`pdp-size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery */}
            <div className="pdp-delivery">
              <span className="pdp-delivery-label">Check Delivery Availability</span>
              <div className="pdp-delivery-input-group">
                <input 
                  type="text" 
                  placeholder="Enter Pincode" 
                  value={pincode} 
                  onChange={(e) => setPincode(e.target.value)} 
                />
                <button>CHECK</button>
              </div>
            </div>

            {/* Actions */}
            <div className="pdp-actions">
              <button className="btn-add-to-bag">ADD TO BAG</button>
              <button className="btn-wishlist">
                <Heart size={20} strokeWidth={1.5} />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Assurances */}
            <div className="pdp-assurances">
              <div className="assurance-item">
                <ShieldCheck size={20} strokeWidth={1.5} />
                <span>Quality Checked</span>
              </div>
              <div className="assurance-item">
                <Lock size={20} strokeWidth={1.5} />
                <span>Secure Payments</span>
              </div>
              <div className="assurance-item">
                <Package size={20} strokeWidth={1.5} />
                <span>Premium Packaging</span>
              </div>
              <div className="assurance-item">
                <Truck size={20} strokeWidth={1.5} />
                <span>Reliable Delivery</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="pdp-accordions">
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion('details')}>
                  <span>Product Details</span>
                  {activeAccordion === 'details' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeAccordion === 'details' && (
                  <div className="accordion-content">
                    <ul>
                      <li><strong>Metal:</strong> {product.metal}</li>
                      <li><strong>Stone Colour:</strong> {product.stoneColor || 'None'}</li>
                      <li><strong>Finish:</strong> High Polish</li>
                      <li><strong>Product Code:</strong> MV-SIL-RG-XXXX</li>
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion('dimensions')}>
                  <span>Dimensions & Weight</span>
                  {activeAccordion === 'dimensions' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeAccordion === 'dimensions' && (
                  <div className="accordion-content">
                    <ul>
                      <li><strong>Gross Weight:</strong> 4.2g</li>
                      <li><strong>Dimensions:</strong> 12mm x 12mm</li>
                      <li><strong>Ring Size:</strong> {selectedSize}</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion('care')}>
                  <span>Care Instructions</span>
                  {activeAccordion === 'care' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeAccordion === 'care' && (
                  <div className="accordion-content">
                    <p>Store your jewellery separately in a dry place. Avoid direct contact with perfumes, harsh chemicals and excessive moisture. Wipe gently with a soft jewellery cloth after use.</p>
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <button className="accordion-header" onClick={() => toggleAccordion('shipping')}>
                  <span>Shipping & Returns</span>
                  {activeAccordion === 'shipping' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {activeAccordion === 'shipping' && (
                  <div className="accordion-content">
                    <p>Free express shipping on all orders over ₹2000. 15-day easy returns policy.</p>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>

        {/* Recommendations */}
        <div className="pdp-recommendations">
          <ProductRail 
            title="You May Also Like" 
            products={dummyProducts.filter(p => p.id !== product.id).slice(0, 5)} 
          />
          <ProductRail 
            title="Complete the Look" 
            products={dummyProducts.filter(p => p.id !== product.id).slice(2, 7)} 
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
