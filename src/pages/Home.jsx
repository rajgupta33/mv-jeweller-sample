import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductRail from '../components/ProductRail';
import CollectionBanners from '../components/CollectionBanners';
import OccasionGrid from '../components/OccasionGrid';
import GiftBanner from '../components/GiftBanner';
import PromiseSection from '../components/PromiseSection';
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
      <CollectionBanners />
      <ProductRail 
        title="MOST LOVED" 
        products={dummyProducts.map(p => ({...p, isNew: false}))} 
      />
      <OccasionGrid />
      <GiftBanner />
      <PromiseSection />
      <BrandStory />
    </>
  );
}

export default Home;
