import React, { useState } from 'react';
import { Save, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

function RateEntry() {
  const [rates, setRates] = useState({
    silver999: 88500,
    silver925: 81800,
    gold24k: 73500
  });

  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('idle'); // idle, saving, success, error
  const [auditLog, setAuditLog] = useState([
    { id: 1, timestamp: '2026-08-24T10:00:00Z', user: 'Admin', action: 'Published Rates', details: 'Silver 999: ₹88,500/kg' }
  ]);

  const handleSave = (e) => {
    e.preventDefault();
    setStatus('saving');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setAuditLog(prev => [
        { 
          id: Date.now(), 
          timestamp: new Date().toISOString(), 
          user: 'Current User', 
          action: 'Draft Saved', 
          details: `Silver 999: ₹${rates.silver999}/kg, Notes: ${notes || 'None'}` 
        },
        ...prev
      ]);
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--mv-charcoal)' }}>M.V Control Center</h1>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{ padding: '8px 16px', background: 'var(--soft-platinum)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>Role: Admin</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
        <div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid var(--mist-silver)' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '24px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RefreshCw size={20} />
              Daily Rate Entry
            </h2>
            
            <form onSubmit={handleSave}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600', color: 'var(--mv-charcoal)' }}>M.V Silver 999 (₹/kg)</label>
                  <input 
                    type="number" 
                    value={rates.silver999}
                    onChange={(e) => setRates({...rates, silver999: e.target.value})}
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--mist-silver)', fontSize: '1rem' }} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600', color: 'var(--mv-charcoal)' }}>M.V Silver 925 (₹/kg)</label>
                  <input 
                    type="number" 
                    value={rates.silver925}
                    onChange={(e) => setRates({...rates, silver925: e.target.value})}
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--mist-silver)', fontSize: '1rem' }} 
                  />
                  <p style={{ fontSize: '0.75rem', marginTop: '4px', color: '#666' }}>Used for retail pricing engine.</p>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600', color: 'var(--mv-charcoal)' }}>M.V Gold 24K (₹/10g)</label>
                  <input 
                    type="number" 
                    value={rates.gold24k}
                    onChange={(e) => setRates({...rates, gold24k: e.target.value})}
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--mist-silver)', fontSize: '1rem' }} 
                  />
                  <p style={{ fontSize: '0.75rem', marginTop: '4px', color: '#666' }}>Used for bullion indication only.</p>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600', color: 'var(--mv-charcoal)' }}>Effective Date</label>
                  <input 
                    type="date" 
                    defaultValue={new Date().toISOString().split('T')[0]}
                    style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--mist-silver)', fontSize: '1rem' }} 
                  />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', fontWeight: '600', color: 'var(--mv-charcoal)' }}>Internal Notes (Optional)</label>
                <textarea 
                  rows="3" 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Supplier/market notes or justification..."
                  style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid var(--mist-silver)', fontSize: '0.9rem' }}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <button 
                  type="submit" 
                  disabled={status === 'saving'}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'var(--mv-charcoal)', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
                >
                  <Save size={18} />
                  {status === 'saving' ? 'SAVING...' : 'SAVE AS DRAFT'}
                </button>
                <button 
                  type="button" 
                  style={{ padding: '12px 24px', background: 'transparent', color: 'var(--mv-charcoal)', border: '1px solid var(--mv-charcoal)', borderRadius: '6px', fontWeight: '600', cursor: 'not-allowed', opacity: 0.5 }}
                  title="Preview must be reviewed before publishing"
                >
                  PREVIEW & PUBLISH
                </button>
                
                {status === 'success' && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--success-green)', fontSize: '0.85rem', fontWeight: '600' }}>
                    <CheckCircle size={16} /> Draft Saved
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Pricing Engine Prototype Information */}
          <div style={{ background: 'var(--porcelain)', borderRadius: '12px', padding: '24px', border: '1px solid var(--mist-silver)', marginTop: '24px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={18} color="var(--muted-champagne)" />
              Pricing Engine Prototype
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
              This is a prototype view. In the final system, saving a rate as Draft will calculate new prices for all affected silver SKUs privately. You will be able to review the margins and absolute price changes before pressing "Publish" to sync to Shopify.
            </p>
          </div>
        </div>

        {/* Audit Log */}
        <div>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid var(--mist-silver)', height: '100%' }}>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '24px', fontWeight: '600' }}>Audit Log</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {auditLog.map(log => (
                <div key={log.id} style={{ paddingBottom: '16px', borderBottom: '1px solid var(--mist-silver)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '600', fontSize: '0.85rem', color: 'var(--mv-charcoal)' }}>{log.action}</span>
                    <span style={{ fontSize: '0.75rem', color: '#888' }}>
                      {new Date(log.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '4px' }}>{log.details}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-champagne)', fontWeight: '600' }}>By: {log.user}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateEntry;
