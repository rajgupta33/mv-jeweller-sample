import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image-util';

function EconomyPlan() {
  return (
    <div className="container" style={{ padding: '80px 16px', minHeight: '60vh', textAlign: 'center' }}>
      <span style={{ fontSize: '13px', letterSpacing: '0.1em', fontWeight: '600', color: 'var(--mv-charcoal)', display: 'block', marginBottom: '16px' }}>M.V ECONOMY PLAN</span>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>Your Next M.V Piece,<br/>Planned Beautifully</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto 48px auto', fontSize: '1.125rem', lineHeight: '1.6', color: 'var(--mv-charcoal)' }}>
        Pay 6 eligible instalments. Your 7th equivalent instalment is on M.V — subject to plan terms.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', maxWidth: '1000px', margin: '0 auto 64px auto', textAlign: 'left' }}>
        <div style={{ padding: '32px', backgroundColor: 'var(--porcelain)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: '600' }}>1. Choose Your Plan</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--mv-charcoal)', opacity: '0.8' }}>
            Select a comfortable monthly instalment amount that suits your budget.
          </p>
        </div>
        <div style={{ padding: '32px', backgroundColor: 'var(--porcelain)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: '600' }}>2. Pay 6 Instalments</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--mv-charcoal)', opacity: '0.8' }}>
            Complete 6 monthly instalments on time with ease through our secure portal.
          </p>
        </div>
        <div style={{ padding: '32px', backgroundColor: 'var(--porcelain)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: '600' }}>3. Redeem & Shine</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--mv-charcoal)', opacity: '0.8' }}>
            We'll fund the 7th instalment. Use the accumulated value to purchase your favourite M.V silver jewellery!
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 32px', backgroundColor: 'var(--soft-platinum)', borderRadius: '16px', textAlign: 'left' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', fontWeight: '600', textAlign: 'center' }}>Join the Waitlist</h3>
        <p style={{ fontSize: '0.95rem', marginBottom: '24px', textAlign: 'center', color: 'var(--mv-charcoal)' }}>
          The M.V Economy Plan is launching soon. Join the waitlist to get early access and staff-assisted onboarding.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining the waitlist!"); }}>
          <input type="text" placeholder="Full Name" required style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--mist-silver)', width: '100%' }} />
          <input type="email" placeholder="Email Address" required style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--mist-silver)', width: '100%' }} />
          <input type="tel" placeholder="Mobile Number" required style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--mist-silver)', width: '100%' }} />
          <button type="submit" className="btn-primary" style={{ padding: '16px', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', marginTop: '8px' }}>NOTIFY ME</button>
        </form>
      </div>

    </div>
  );
}

export default EconomyPlan;
