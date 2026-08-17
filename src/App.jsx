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
import Maintenance from './pages/Maintenance';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout onOpenCart={() => setIsCartOpen(true)} />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Maintenance />} />
          <Route path="collections/:id" element={<Maintenance />} />
          <Route path="collections/:id/all" element={<Maintenance />} />
          <Route path="products/:id" element={<Maintenance />} />
          <Route path="pages/bulk-orders" element={<BulkOrders />} />
          <Route path="search" element={<Maintenance />} />
          <Route path="wishlist" element={<Maintenance />} />
          <Route path="account" element={<Maintenance />} />
          <Route path="cart" element={<Maintenance />} />
          <Route path="*" element={<Maintenance />} />
        </Route>
      </Routes>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </Router>
  );
}

export default App;

