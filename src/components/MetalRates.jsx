import React, { useState, useEffect } from 'react';
import './MetalRates.css';

function MetalRates() {
  const [rates, setRates] = useState({ 
    gold: '...', 
    silver: '...', 
    lastUpdated: 'Loading...' 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveRates = async () => {
      const CACHE_KEY = 'mv_mcx_metal_rates';
      const CACHE_TIME = 60 * 60 * 1000; // 1 hour in milliseconds
      
      try {
        // 1. Check if we have cached rates from the last hour
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TIME) {
            setRates(parsed.rates);
            setLoading(false);
            return; // Exit early, use the cache!
          }
        }

        // 2. If no cache or it's expired, fetch fresh data from our secure Vercel backend
        const API_URL = "/api/rates";
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (data.status === 'success' && data.rates) {
          // Format numbers to Indian currency style (e.g. 74,500)
          const formatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });
          
          // API provides Gold per kg. Divide by 100 to get per 10g.
          const gold10g = formatter.format(data.rates.mcx_gold / 100);
          const silverKg = formatter.format(data.rates.mcx_silver);
          
          const newRates = {
            gold: gold10g,
            silver: silverKg,
            lastUpdated: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
          };
          
          setRates(newRates);
          
          // Save to cache so we don't fetch again for an hour
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            rates: newRates
          }));
        } else {
          throw new Error(data.error_message || "API returned failure status");
        }
      } catch (error) {
        console.error("Failed to fetch live MCX rates:", error);
        // Fallback to placeholders if API fails
        setRates({
          gold: 'Unavailable',
          silver: 'Unavailable',
          lastUpdated: 'Offline'
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchLiveRates();
  }, []);

  return (
    <div className="metal-rates-wrapper">
      <div className="container metal-rates-container">
        <div className="rate-ticker">
          <span className="rate-label">LIVE MCX REFERENCE:</span>
          
          <span className="metal-name">GOLD</span>
          <span className="metal-price" style={{ opacity: loading ? 0.5 : 1, transition: 'opacity 0.3s' }}>
            ₹{rates.gold} / 10g
          </span>
          <span className="rate-movement up">↑</span>
          
          <span className="rate-divider">|</span>
          
          <span className="metal-name">SILVER</span>
          <span className="metal-price" style={{ opacity: loading ? 0.5 : 1, transition: 'opacity 0.3s' }}>
            ₹{rates.silver} / kg
          </span>
          <span className="rate-movement up">↑</span>

          <span className="rate-divider rate-divider--wide">|</span>
          <span className="mcx-info">Updated {rates.lastUpdated}</span>

          <a href="/pages/gold-bullion" className="view-rates-link">
            View Bullion →
          </a>
        </div>
      </div>
    </div>
  );
}

export default MetalRates;
