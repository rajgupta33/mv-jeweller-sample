import React from 'react';

function About() {
  return (
    <div className="container" style={{ padding: '80px 16px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '24px', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>Our Story</h1>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--mv-charcoal)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '24px' }}>
          Welcome to M.V Ornaments. Our journey is built upon a foundation of Quality With Creativity.
        </p>
        <p style={{ marginBottom: '24px' }}>
          We believe that jewellery should feel personal. Our collections bring together contemporary design, fine detailing and thoughtfully selected pieces created for everyday expression and special moments alike.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '64px auto 0 auto', padding: '40px', backgroundColor: 'var(--porcelain)', borderRadius: '16px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>The Man Behind M.V Ornaments</h2>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--mist-silver)', margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem' }}>
          MV
        </div>
        <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--mv-charcoal)' }}>
          "Detailed founder biography and story will be updated here once approved by the business."
        </p>
      </div>
    </div>
  );
}

export default About;
