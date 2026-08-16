import React from 'react';
import './OccasionGrid.css';
import { Calendar, Heart, Star, Gift } from 'lucide-react';

const occasions = [
  { id: 1, title: 'EVERYDAY', icon: Calendar, link: '/collections/everyday' },
  { id: 2, title: 'WEDDING', icon: Heart, link: '/collections/wedding' },
  { id: 3, title: 'FESTIVE', icon: Star, link: '/collections/festive' },
  { id: 4, title: 'GIFTS', icon: Gift, link: '/collections/gifts' },
];

function OccasionGrid() {
  return (
    <section className="occasion-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-decoration">❦</div>
          <h2 className="section-title">SHOP BY OCCASION</h2>
          <div className="section-decoration">❦</div>
        </div>

        <div className="occasion-grid">
          {occasions.map((occ) => {
            const Icon = occ.icon;
            return (
              <a href={occ.link} key={occ.id} className="occasion-card">
                <Icon size={24} strokeWidth={1.5} className="occasion-icon" />
                <span className="occasion-title">{occ.title}</span>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OccasionGrid;
