import React from 'react';

export default function ShopByVibeSection() {
  return (
    <section style={{ padding: '100px 5%', backgroundColor: '#FAF8F5', color: '#2B1B24' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.8rem', color: '#C88EA7', fontWeight: 'bold' }}>
          Find Your Aesthetic
        </span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.2rem', margin: '15px 0' }}>
          CHOOSE YOUR VIBE
        </h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        
        {/* Card 1: Coquette */}
        <div style={{
          position: 'relative',
          height: '500px',
          borderRadius: '24px',
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          transition: 'transform 0.4s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <img 
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800" 
            alt="Coquette Nails" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} 
            className="vibe-img"
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(43,27,36,0.9) 0%, rgba(43,27,36,0.2) 50%, transparent 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '40px',
            color: '#FFF'
          }}>
            <span style={{ fontSize: '1.8rem', marginBottom: '10px' }}>🎀</span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: 0, letterSpacing: '1px' }}>COQUETTE</h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, margin: '12px 0 25px 0', lineHeight: '1.5' }}>
              Korean nail aesthetics, soft pinks, pearls, floral art & delicate hand-painted bows.
            </p>
            <button style={{
              alignSelf: 'flex-start',
              padding: '12px 28px',
              borderRadius: '30px',
              border: 'none',
              background: '#FFF',
              color: '#2B1B24',
              fontWeight: '700',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              cursor: 'pointer'
            }}>
              EXPLORE SOFT GLAM
            </button>
          </div>
        </div>

        {/* Card 2: Statement */}
        <div style={{
          position: 'relative',
          height: '500px',
          borderRadius: '24px',
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          transition: 'transform 0.4s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <img 
            src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800" 
            alt="Statement Nails" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} 
            className="vibe-img"
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(20,10,16,0.95) 0%, rgba(20,10,16,0.3) 50%, transparent 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '40px',
            color: '#FFF'
          }}>
            <span style={{ fontSize: '1.8rem', marginBottom: '10px' }}>✶</span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: 0, letterSpacing: '1px' }}>STATEMENT</h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, margin: '12px 0 25px 0', lineHeight: '1.5' }}>
              Mocha chrome, dark cherry gradients & bold salon-quality coolgirl designs.
            </p>
            <button style={{
              alignSelf: 'flex-start',
              padding: '12px 28px',
              borderRadius: '30px',
              border: 'none',
              background: '#FFF',
              color: '#2B1B24',
              fontWeight: '700',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              cursor: 'pointer'
            }}>
              EXPLORE STATEMENT
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
