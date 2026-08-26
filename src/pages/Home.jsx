import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductRail from '../components/ProductRail';
import PromiseSection from '../components/PromiseSection';
import GiftBanner from '../components/GiftBanner';
import OccasionGrid from '../components/OccasionGrid';
import CollectionBanners from '../components/CollectionBanners';
import TrustMetrics from '../components/TrustMetrics';
import CustomerReviews from '../components/CustomerReviews';
import InstagramGallery from '../components/InstagramGallery';
import BulkOrder from '../components/BulkOrder';
import BrandStory from '../components/BrandStory';
import { dummyProducts } from '../data/dummy';

function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductRail 
        title="NEW ARRIVALS" 
        products={dummyProducts.filter(p => p.isNew)} 
        viewAllLink="/collections/new-arrivals" 
      />
      <CollectionBanners /> {/* Used for SIARA and Silver Banners */}
      <ProductRail 
        title="MOST LOVED" 
        products={dummyProducts.map(p => ({...p, isNew: false}))} 
      />
      <OccasionGrid />
      <GiftBanner />
      {/* Economy Plan Placeholder */}
      <BulkOrder />
      {/* Gold Bullion Placeholder */}
      <PromiseSection />
      <CustomerReviews />
      <InstagramGallery />
      <BrandStory />
      <TrustMetrics />
    </>
  );
}

export default Home;
