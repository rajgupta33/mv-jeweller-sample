import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductRail from '../components/ProductRail';
import { dummyProducts } from '../data/dummy';
import './CollectionLanding.css';

function CollectionLanding() {
  const { id } = useParams();
  
  // Dummy data switch based on id
  const isGold = id === 'gold-jewellery';
  
  const title = isGold ? "Gold Jewellery" : "Silver Jewellery";
  const subtitle = isGold ? "Made for moments that last." : "Modern silver, made for every day.";
  const description = isGold 
    ? "Discover timeless gold jewellery created for celebrations, milestones and everyday elegance."
    : "Discover elegant 925 sterling silver jewellery designed to move effortlessly from everyday moments to meaningful occasions.";
  const buttonText = isGold ? "EXPLORE GOLD" : "SHOP ALL SILVER";
  
  const categories = isGold ? [
    { title: "Gold Rings", desc: "Timeless designs from minimal to statement.", link: "/collections/gold-rings" },
    { title: "Gold Necklaces", desc: "Delicate details designed to sit close to your story.", link: "/collections/gold-necklaces" },
    { title: "Gold Earrings", desc: "Everyday sparkle and elegant finishing touches.", link: "/collections/gold-earrings" },
    { title: "Gold Bracelets", desc: "Refined pieces for effortless layering.", link: "/collections/gold-bracelets" }
  ] : [
    { title: "Silver Rings", desc: "Contemporary designs from minimal to statement.", link: "/collections/silver-rings" },
    { title: "Silver Necklaces", desc: "Delicate details designed to sit close to your story.", link: "/collections/silver-necklaces" },
    { title: "Silver Earrings", desc: "Everyday sparkle and elegant finishing touches.", link: "/collections/silver-earrings" },
    { title: "Silver Bracelets", desc: "Refined pieces for effortless layering.", link: "/collections/silver-bracelets" }
  ];

  return (
    <div className={`collection-landing ${isGold ? 'theme-gold' : 'theme-silver'}`}>
      
      {/* Hero Section */}
      <section className="clp-hero">
        <div className="clp-hero-content">
          <h1 className="clp-hero-title">{title}</h1>
          <h2 className="clp-hero-subtitle">{subtitle}</h2>
          <p className="clp-hero-desc">{description}</p>
          <Link to={`/collections/${id}/all`} className="btn btn-primary">{buttonText}</Link>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="clp-section">
        <div className="container">
          <h2 className="section-title">Shop {isGold ? 'Gold' : 'Silver'} by Category</h2>
          <div className="clp-category-grid">
            {categories.map((cat, i) => (
              <Link to={cat.link} className="clp-category-card" key={i}>
                <div className="clp-category-image-placeholder"></div>
                <div className="clp-category-info">
                  <h3 className="clp-category-title">{cat.title}</h3>
                  <p className="clp-category-desc">{cat.desc}</p>
                  <span className="clp-category-link">EXPLORE {cat.title.split(' ')[1].toUpperCase()} &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="clp-section">
        <ProductRail 
          title={`New in ${isGold ? 'Gold' : 'Silver'}`}
          subtitle="Freshly added designs from M.V Ornaments."
          products={dummyProducts.filter(p => p.isNew)} 
        />
      </section>

      {/* Shop by Style */}
      <section className="clp-section bg-secondary">
        <div className="container text-center">
          <h2 className="section-title">Shop by Style</h2>
          <div className="clp-style-links">
            <Link to={`/collections/${id}/style/minimal`}>Minimal</Link>
            <Link to={`/collections/${id}/style/everyday`}>Everyday</Link>
            <Link to={`/collections/${id}/style/statement`}>Statement</Link>
            <Link to={`/collections/${id}/style/floral`}>Floral</Link>
            <Link to={`/collections/${id}/style/stone`}>Stone Jewellery</Link>
            <Link to={`/collections/${id}/style/gifting`}>Gifting</Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="clp-seo-section">
        <div className="container">
          <h2>Discover {isGold ? 'Timeless Gold' : '925 Sterling Silver'} Jewellery at M.V Ornaments</h2>
          <p>
            Explore contemporary {isGold ? 'gold' : 'silver'} jewellery designed for effortless styling and memorable gifting. From elegant rings and delicate necklaces to earrings, bracelets and statement designs, M.V Ornaments brings together thoughtfully selected pieces crafted to complement every style and occasion.
          </p>
        </div>
      </section>
    </div>
  );
}

export default CollectionLanding;
