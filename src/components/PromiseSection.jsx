import React from 'react';
import { ShieldCheck, Package, Lock, Truck } from 'lucide-react';
import './PromiseSection.css';

const promises = [
  {
    icon: ShieldCheck,
    title: 'QUALITY YOU CAN TRUST',
    desc: 'Carefully selected materials and craftsmanship.'
  },
  {
    icon: Package,
    title: 'BEAUTIFULLY PRESENTED',
    desc: 'Premium packaging designed for gifting and safekeeping.'
  },
  {
    icon: Lock,
    title: 'SECURE SHOPPING',
    desc: 'Protected payments and a trusted checkout experience.'
  },
  {
    icon: Truck,
    title: 'RELIABLE DELIVERY',
    desc: 'Carefully packed and delivered across serviceable locations.'
  }
];

function PromiseSection() {
  return (
    <section className="promise-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-decoration">❦</div>
          <h2 className="section-title">THE M.V PROMISE</h2>
          <div className="section-decoration">❦</div>
        </div>

        <div className="promise-grid">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <div key={index} className="promise-item">
                <div className="promise-icon-wrapper">
                  <Icon size={32} strokeWidth={1} className="promise-icon" />
                </div>
                <h3 className="promise-title">{promise.title}</h3>
                <p className="promise-desc">{promise.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default PromiseSection;
