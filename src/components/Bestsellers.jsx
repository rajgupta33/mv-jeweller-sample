import React from 'react';
import './Bestsellers.css';

const bestsellersData = [
  { id: 1, name: 'Eternity Diamond Ring', price: '₹75,000' },
  { id: 2, name: 'Classic Gold Hoop Earrings', price: '₹22,500' },
  { id: 3, name: 'Pearl & Gold Pendant', price: '₹45,000' },
  { id: 4, name: 'Tennis Diamond Bracelet', price: '₹1,50,000' },
];

const Bestsellers = () => {
  return (
    <section className="bestsellers container">
      <h2 className="section-title">Trending Bestsellers</h2>
      <div className="bestsellers-grid">
        {bestsellersData.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image-placeholder">
               <img src="https://placehold.co/400x500/eaeaea/888888?text=Product" alt={item.name} className="product-image" />
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
