import React from 'react';
import SoftAurora from './SoftAurora';

export default function HeroSection() {
  return (
    <div id="home" style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: '#140A10', overflow: 'hidden' }}>
      <SoftAurora
        speed={0.5}
        scale={1.2}
        brightness={0.85}
        color1="#FFC0CB"
        color2="#E6C280"
        noiseFrequency={2.0}
        noiseAmplitude={1.2}
        bandHeight={0.5}
        bandSpread={1.2}
        octaveDecay={0.1}
        layerOffset={0.2}
        colorSpeed={0.8}
        enableMouseInteraction={true}
        mouseInfluence={0.3}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        pointerEvents: 'none',
        textAlign: 'center',
        color: '#FFF0F5'
      }}>
        <h1 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '4.5rem', 
          letterSpacing: '6px', 
          margin: '0 0 10px 0',
          textShadow: '0 4px 12px rgba(0,0,0,0.5)'
        }}>
          STUDIO 14
        </h1>
        <p style={{ 
          letterSpacing: '3px', 
          textTransform: 'uppercase', 
          fontSize: '0.9rem', 
          opacity: 0.9,
          textShadow: '0 4px 12px rgba(0,0,0,0.5)'
        }}>
          Custom • Reusable • Handcrafted Press-On Nails
        </p>
        <button 
          onClick={() => window.open('https://instagram.com/s1udi0_14', '_blank')}
          style={{
          marginTop: '30px',
          padding: '14px 32px',
          borderRadius: '50px',
          border: '1px solid rgba(255, 192, 203, 0.3)',
          background: 'rgba(20, 10, 16, 0.5)',
          backdropFilter: 'blur(12px)',
          color: '#FFF',
          fontSize: '0.85rem',
          letterSpacing: '2px',
          cursor: 'pointer',
          pointerEvents: 'auto',
          transition: 'all 0.3s ease'
        }}>
          EXPLORE DROPS 🎀
        </button>
      </div>
    </div>
  );
}
