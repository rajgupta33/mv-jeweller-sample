import React from 'react';

function PartnerWithUs() {
  return (
    <div className="container" style={{ padding: 'clamp(48px, 9vw, 80px) 16px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: 'clamp(1.75rem, 6.5vw, 2.5rem)', fontWeight: '700', marginBottom: '16px', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>Partner With Us</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto 48px auto', fontSize: 'clamp(0.95rem, 3vw, 1.125rem)', lineHeight: '1.6', color: 'var(--mv-charcoal)', textAlign: 'center' }}>
        Become a part of the M.V Ornaments journey. We are looking for passionate franchise partners and retailers to expand our premium silver-first presence.
      </p>

      <div style={{ maxWidth: '600px', width: '100%', padding: 'clamp(22px, 5.5vw, 40px)', backgroundColor: 'var(--porcelain)', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid var(--mist-silver)' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', fontWeight: '600' }}>Partnership Enquiry</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => { e.preventDefault(); alert("Enquiry submitted!"); }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>Full Name *</label>
              <input type="text" required style={{ width: '100%', minHeight: '46px', padding: '12px', border: '1px solid var(--mist-silver)', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', backgroundColor: 'var(--white)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>Phone *</label>
              <input type="tel" required style={{ width: '100%', minHeight: '46px', padding: '12px', border: '1px solid var(--mist-silver)', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', backgroundColor: 'var(--white)' }} />
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>Email Address *</label>
              <input type="email" required style={{ width: '100%', minHeight: '46px', padding: '12px', border: '1px solid var(--mist-silver)', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', backgroundColor: 'var(--white)' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>City / State *</label>
              <input type="text" required style={{ width: '100%', minHeight: '46px', padding: '12px', border: '1px solid var(--mist-silver)', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', backgroundColor: 'var(--white)' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>Current Business (if any)</label>
            <input type="text" style={{ width: '100%', minHeight: '46px', padding: '12px', border: '1px solid var(--mist-silver)', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', backgroundColor: 'var(--white)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>Investment Range *</label>
              <select required style={{ width: '100%', minHeight: '46px', padding: '12px', border: '1px solid var(--mist-silver)', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', backgroundColor: 'var(--white)' }}>
                <option value="">Select range</option>
                <option value="10-25L">₹10 Lakhs - ₹25 Lakhs</option>
                <option value="25-50L">₹25 Lakhs - ₹50 Lakhs</option>
                <option value="50L+">₹50 Lakhs +</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>Property Availability *</label>
              <select required style={{ width: '100%', minHeight: '46px', padding: '12px', border: '1px solid var(--mist-silver)', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', backgroundColor: 'var(--white)' }}>
                <option value="">Select status</option>
                <option value="Owned">Owned</option>
                <option value="Rented">Rented</option>
                <option value="Looking">Looking for space</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600' }}>Message / Questions</label>
            <textarea rows="4" style={{ width: '100%', padding: '12px', border: '1px solid var(--mist-silver)', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', backgroundColor: 'var(--white)' }}></textarea>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginTop: '8px' }}>
            <input type="checkbox" id="consent" required style={{ marginTop: '3px', width: '20px', height: '20px', flex: 'none' }} />
            <label htmlFor="consent" style={{ fontSize: '0.85rem', color: 'var(--mv-charcoal)' }}>I agree to be contacted by the M.V Ornaments partnership team.</label>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', marginTop: '16px' }}>SUBMIT ENQUIRY</button>
        </form>
      </div>
    </div>
  );
}

export default PartnerWithUs;
