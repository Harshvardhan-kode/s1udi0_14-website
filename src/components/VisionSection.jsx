import React from 'react';

export default function VisionSection() {
  return (
    <section id="vision" style={{ 
      backgroundColor: '#FAF8F5', 
      padding: '120px 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1000px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Text Content */}
        <div style={{ color: '#2B1B24' }}>
          <span style={{ 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            fontSize: '0.8rem', 
            color: '#C88EA7', 
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '15px'
          }}>
            About The Brand
          </span>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '3.5rem', 
            margin: '0 0 30px 0', 
            lineHeight: '1.1'
          }}>
            THE VISION
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8', 
            marginBottom: '20px',
            color: '#4A3B43'
          }}>
            Studio 14 was born from a desire to bring intricate, salon-quality nail art to the convenience of your home. We believe your nails are a canvas for self-expression—whether you're feeling soft and coquette or bold and statement-making.
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.8',
            color: '#4A3B43'
          }}>
            Each set is meticulously handcrafted, blending premium materials with modern Korean aesthetics. Reusable, damage-free, and unequivocally luxurious.
          </p>
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          position: 'relative'
        }}>
          <img 
            src="/attachments/IMG_20260731_215431_457.jpg" 
            alt="Studio Details" 
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '20px',
              transform: 'translateY(30px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }} 
          />
          <img 
            src="/attachments/IMG_20260731_215903_984.jpg" 
            alt="Studio Process" 
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover', 
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }} 
          />
        </div>
      </div>
    </section>
  );
}
