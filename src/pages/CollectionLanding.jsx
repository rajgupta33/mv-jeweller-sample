import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductRail from '../components/ProductRail';
import { dummyProducts } from '../data/dummy';
import './CollectionLanding.css';

function CollectionLanding() {
  const { id } = useParams();
  
  let title = "";
  let subtitle = "";
  let description = "";
  let buttonText = "";
  let categories = [];
  let isGold = false;
  let heroImage = "";

  if (id === 'gold-jewellery') {
    isGold = true;
    title = "Gold Jewellery";
    subtitle = "Made for moments that last.";
    description = "Discover timeless gold jewellery created for celebrations, milestones and everyday elegance.";
    buttonText = "EXPLORE GOLD";
    heroImage = "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1600&q=80";
    categories = [
      { title: "Gold Rings", desc: "Timeless designs from minimal to statement.", link: "/collections/gold-rings", img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=600&q=80" },
      { title: "Gold Necklaces", desc: "Delicate details designed to sit close to your story.", link: "/collections/gold-necklaces", img: "https://images.unsplash.com/photo-1515562141589-67f0d727b750?auto=format&fit=crop&w=600&q=80" },
      { title: "Gold Earrings", desc: "Everyday sparkle and elegant finishing touches.", link: "/collections/gold-earrings", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80" },
      { title: "Gold Bracelets", desc: "Refined pieces for effortless layering.", link: "/collections/gold-bracelets", img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=600&q=80" }
    ];
  } else if (id === 'silver-jewellery') {
    isGold = false;
    title = "Silver Jewellery";
    subtitle = "Modern silver, made for every day.";
    description = "Discover elegant 925 sterling silver jewellery designed to move effortlessly from everyday moments to meaningful occasions.";
    buttonText = "SHOP ALL SILVER";
    heroImage = "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1600&q=80";
    categories = [
      { title: "Silver Rings", desc: "Contemporary designs from minimal to statement.", link: "/collections/silver-rings", img: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&w=600&q=80" },
      { title: "Silver Necklaces", desc: "Delicate details designed to sit close to your story.", link: "/collections/silver-necklaces", img: "https://images.unsplash.com/photo-1599643478514-4a4208a0d4db?auto=format&fit=crop&w=600&q=80" },
      { title: "Silver Earrings", desc: "Everyday sparkle and elegant finishing touches.", link: "/collections/silver-earrings", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
      { title: "Silver Bracelets", desc: "Refined pieces for effortless layering.", link: "/collections/silver-bracelets", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80" }
    ];
  } else {
    const formattedId = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Collection';
    title = formattedId;
    subtitle = `Explore our stunning ${formattedId.toLowerCase()} collection.`;
    description = `Discover our carefully curated selection of ${formattedId.toLowerCase()}, designed for effortless styling and memorable gifting.`;
    buttonText = `SHOP ${formattedId.toUpperCase()}`;
    
    // Default to a bracelet image, but override for specific categories
    heroImage = "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1600&q=80";
    
    if (id === 'necklaces') {
      heroImage = "https://images.unsplash.com/photo-1599643478514-4a4208a0d4db?auto=format&fit=crop&w=1600&q=80";
    } else if (id === 'rings') {
      heroImage = "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&w=1600&q=80";
    } else if (id === 'earrings') {
      heroImage = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80";
    } else if (id === 'gifts') {
      heroImage = "https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&w=1600&q=80";
    } else if (id === 'new-arrivals') {
      heroImage = "https://images.unsplash.com/photo-1515562141589-67f0d727b750?auto=format&fit=crop&w=1600&q=80";
    }

    categories = [
      { title: "Gold Collection", desc: "Timeless designs from minimal to statement.", link: "/collections/gold-jewellery", img: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=600&q=80" },
      { title: "Silver Collection", desc: "Contemporary designs from minimal to statement.", link: "/collections/silver-jewellery", img: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&w=600&q=80" },
      { title: "New Arrivals", desc: "Freshly added designs.", link: "/collections/new-arrivals", img: "https://images.unsplash.com/photo-1515562141589-67f0d727b750?auto=format&fit=crop&w=600&q=80" },
      { title: "Gifts", desc: "Perfect pieces for your loved ones.", link: "/collections/gifts", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80" }
    ];
  }

  return (
    <div className={`collection-landing ${isGold ? 'theme-gold' : 'theme-silver'}`}>
      
      {/* Hero Section */}
      <section className="clp-hero" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
                <div className="clp-category-image-placeholder">
                  <img src={cat.img} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="clp-category-info">
                  <h3 className="clp-category-title">{cat.title}</h3>
                  <p className="clp-category-desc">{cat.desc}</p>
                  <span className="clp-category-link">EXPLORE {cat.title.split(' ').pop().toUpperCase()} &rarr;</span>
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
