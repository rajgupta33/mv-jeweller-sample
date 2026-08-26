import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Check if the user already closed the popup in this session
    const hasClosed = sessionStorage.getItem('promoClosed');
    
    if (!hasClosed) {
      // Show the popup exactly 5 seconds after the component mounts (website loads)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for the fade-out animation before fully removing it from DOM
    setTimeout(() => {
      setIsClosed(true);
    }, 600); 
    sessionStorage.setItem('promoClosed', 'true');
  };

  if (isClosed) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: isVisible ? '30px' : '-20px',
        right: '30px',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', // Smooth graceful slide up
        zIndex: 9999,
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
        padding: '28px 24px 24px',
        maxWidth: '320px',
        border: '1px solid rgba(0,0,0,0.05)',
        fontFamily: 'var(--font-body, sans-serif)'
      }}
    >
      {/* Close Button */}
      <button 
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'var(--porcelain, #f8f9fa)',
          border: 'none',
          cursor: 'pointer',
          color: '#666',
          width: '28px',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          transition: 'background 0.2s',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#eee'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--porcelain, #f8f9fa)'}
        aria-label="Close promotion"
      >
        <X size={14} />
      </button>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <div style={{ 
          background: 'var(--muted-champagne, #f3e5d8)', 
          padding: '10px', 
          borderRadius: '50%', 
          color: 'var(--mv-charcoal, #333)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Gift size={20} />
        </div>
        <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: '600', color: 'var(--mv-charcoal, #333)' }}>
          A Gift For You!
        </h3>
      </div>
      
      {/* Body Copy */}
      <p style={{ margin: '0 0 16px 0', fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
        Grace your collection with something special. Enjoy <strong>20% OFF</strong> your very first purchase with us.
      </p>
      
      {/* Coupon Code Box */}
      <div style={{ 
        background: 'var(--soft-platinum, #f8f9fa)', 
        padding: '14px', 
        borderRadius: '10px', 
        textAlign: 'center',
        border: '1px dashed #ccc'
      }}>
        <span style={{ fontSize: '0.75rem', color: '#888', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Use code at checkout
        </span>
        <strong style={{ fontSize: '1.2rem', color: 'var(--mv-charcoal, #333)', letterSpacing: '1px' }}>
          WELCOME20
        </strong>
      </div>
    </div>
  );
};

export default PromoPopup;
