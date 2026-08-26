import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CollectionLanding from './pages/CollectionLanding';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import CartDrawer from './components/CartDrawer';
import BulkOrders from './pages/BulkOrders';
import Account from './pages/Account';
import Collections from './pages/Collections';
import GoldBullion from './pages/GoldBullion';
import EconomyPlan from './pages/EconomyPlan';
import PartnerWithUs from './pages/PartnerWithUs';
import RateEntry from './pages/admin/RateEntry';
import About from './pages/About';
import PromoPopup from './components/PromoPopup';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout onOpenCart={() => setIsCartOpen(true)} />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:id" element={<CollectionLanding />} />
          <Route path="collections/:id/all" element={<ProductListing />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="pages/bulk-orders" element={<BulkOrders />} />
          <Route path="pages/gold-bullion" element={<GoldBullion />} />
          <Route path="pages/economy-plan" element={<EconomyPlan />} />
          <Route path="pages/partner-with-us" element={<PartnerWithUs />} />
          <Route path="pages/about" element={<About />} />
          <Route path="admin/rates" element={<RateEntry />} />
          <Route path="search" element={<Search />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <PromoPopup />
    </Router>
  );
}

export default App;

