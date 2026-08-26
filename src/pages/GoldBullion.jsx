import React from 'react';

function GoldBullion() {
  return (
    <div className="container" style={{ padding: '80px 16px', textAlign: 'center', minHeight: '60vh' }}>
      <h1>Gold Bullion for Serious Requirements</h1>
      <p style={{ maxWidth: '600px', margin: '20px auto' }}>
        Explore available bullion formats and request a confirmed M.V quote based on your quantity and requirement. Final pricing is confirmed by our team.
      </p>
      
      <div style={{ maxWidth: '400px', margin: '40px auto', padding: '24px', background: 'var(--porcelain)', borderRadius: '12px', border: '1px solid var(--mist-silver)' }}>
        <h3>Request a Quote</h3>
        <p style={{ fontSize: '0.9rem', marginBottom: '24px', color: 'var(--mv-charcoal)' }}>
          Indicative/reference rate; final bullion quote is confirmed by M.V at the time of quotation.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
          <input type="text" placeholder="Name" style={{ padding: '12px', border: '1px solid var(--mist-silver)' }} />
          <input type="email" placeholder="Email" style={{ padding: '12px', border: '1px solid var(--mist-silver)' }} />
          <input type="tel" placeholder="Mobile" style={{ padding: '12px', border: '1px solid var(--mist-silver)' }} />
          <select style={{ padding: '12px', border: '1px solid var(--mist-silver)' }}>
            <option>Personal</option>
            <option>Business</option>
          </select>
          <textarea placeholder="Notes / Requirement" rows="4" style={{ padding: '12px', border: '1px solid var(--mist-silver)' }}></textarea>
          <button type="button" className="btn-primary" style={{ marginTop: '8px' }}>REQUEST QUOTE</button>
        </form>
      </div>
    </div>
  );
}

export default GoldBullion;
