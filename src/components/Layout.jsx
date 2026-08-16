import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import MetalRates from './MetalRates';
import Newsletter from './Newsletter';
import Footer from './Footer';
import MobileNav from './MobileNav';

function Layout({ onOpenCart }) {
  const location = useLocation();
  
  // Newsletter logic: Show on most pages, but maybe hide on checkout/cart later if needed.
  // For now, show on all pages.
  const showNewsletter = true;

  return (
    <>
      <AnnouncementBar />
      <Header onOpenCart={onOpenCart} />
      <MetalRates />
      <main>
        <Outlet />
        {showNewsletter && <Newsletter />}
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}

export default Layout;
