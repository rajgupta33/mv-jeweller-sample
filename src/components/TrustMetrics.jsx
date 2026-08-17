import React, { useState, useEffect, useRef } from 'react';
import './TrustMetrics.css';

const metrics = [
  { value: 600, suffix: '+', label: 'Designs' },
  { value: 100, suffix: '%', label: 'Hallmarked' },
  { value: 5000, suffix: '+', label: 'Happy Customers' },
  { value: 4.8, suffix: '★', label: 'Average Rating', isDecimal: true },
];

function AnimatedCounter({ target, suffix, isDecimal, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target, isDecimal]);

  return (
    <span className="metric-value">
      {isDecimal ? count.toFixed(1) : count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

function TrustMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-metrics-section" ref={ref}>
      <div className="container">
        <div className="trust-metrics-grid">
          {metrics.map((metric, i) => (
            <div key={i} className="metric-item">
              <AnimatedCounter
                target={metric.value}
                suffix={metric.suffix}
                isDecimal={metric.isDecimal}
                isVisible={isVisible}
              />
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustMetrics;
