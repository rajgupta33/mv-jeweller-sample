import React from 'react';
import './Bestsellers.css';

const bestsellersData = [
  { id: 1, name: 'Eternity Silver Ring', price: '₹7,500' },
  { id: 2, name: 'Classic Silver Hoop Earrings', price: '₹2,500' },
  { id: 3, name: 'Pearl & Silver Pendant', price: '₹4,500' },
  { id: 4, name: 'Tennis Silver Bracelet', price: '₹15,000' },
];

const Bestsellers = () => {
  return (
    <section className="bestsellers container">
      <h2 className="section-title">Trending Bestsellers</h2>
      <div className="bestsellers-grid">
        {bestsellersData.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image-placeholder">
               <img src={`https://images.unsplash.com/photo-1599643478514-4a4208a0d4db?auto=format&fit=crop&w=400&h=500&q=80&sig=${item.id}`} alt={item.name} className="product-image" />
            </div>
            <div className="product-info">
              <h4 className="product-name">{item.name}</h4>
              <p className="product-price">{item.price}</p>
              <button className="btn-outline add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
