import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #FFC0CB 0%, #FFE4E1 50%, #FAF8F5 100%)',
      padding: '100px 5%',
      color: '#2B1B24'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        
        {/* Left: Contact Info */}
        <div style={{ flex: '1 1 400px' }}>
          <span style={{ 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            fontSize: '0.8rem', 
            color: '#C88EA7', 
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '15px'
          }}>
            Get In Touch
          </span>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: '3.5rem', 
            margin: '0 0 20px 0', 
            lineHeight: '1.1'
          }}>
            CUSTOM ORDERS
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px', color: '#4A3B43' }}>
            Want a design uniquely tailored to you? Fill out the inquiry form or reach out to us directly through our social channels. We ship PAN India!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href="https://instagram.com/s1udi0_14" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: '#2B1B24', fontWeight: '500', fontSize: '1.1rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C88EA7'} onMouseLeave={(e) => e.currentTarget.style.color = '#2B1B24'}>
              <Instagram size={28} /> @s1udi0_14
            </a>
            <a href="mailto:hello@studio14.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: '#2B1B24', fontWeight: '500', fontSize: '1.1rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C88EA7'} onMouseLeave={(e) => e.currentTarget.style.color = '#2B1B24'}>
              <Mail size={28} /> hello@studio14.com
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: '#2B1B24', fontWeight: '500', fontSize: '1.1rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#C88EA7'} onMouseLeave={(e) => e.currentTarget.style.color = '#2B1B24'}>
              <MessageCircle size={28} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div style={{ 
          flex: '1 1 500px', 
          background: 'rgba(255, 255, 255, 0.7)', 
          backdropFilter: 'blur(20px)', 
          padding: '50px', 
          borderRadius: '30px',
          boxShadow: '0 30px 60px rgba(200, 142, 167, 0.2)'
        }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <input type="text" placeholder="Name" style={{ flex: 1, padding: '15px 20px', borderRadius: '15px', border: '1px solid rgba(200, 142, 167, 0.3)', background: 'rgba(255,255,255,0.9)', outline: 'none', fontSize: '1rem', color: '#2B1B24' }} />
              <input type="email" placeholder="Email" style={{ flex: 1, padding: '15px 20px', borderRadius: '15px', border: '1px solid rgba(200, 142, 167, 0.3)', background: 'rgba(255,255,255,0.9)', outline: 'none', fontSize: '1rem', color: '#2B1B24' }} />
            </div>
            
            <select style={{ padding: '15px 20px', borderRadius: '15px', border: '1px solid rgba(200, 142, 167, 0.3)', background: 'rgba(255,255,255,0.9)', outline: 'none', fontSize: '1rem', color: '#2B1B24', cursor: 'pointer', appearance: 'none' }}>
              <option value="">Select Shape (Almond, Coffin, Square, Oval)</option>
              <option value="almond">Almond</option>
              <option value="coffin">Coffin</option>
              <option value="square">Square</option>
              <option value="oval">Oval</option>
            </select>

            <select style={{ padding: '15px 20px', borderRadius: '15px', border: '1px solid rgba(200, 142, 167, 0.3)', background: 'rgba(255,255,255,0.9)', outline: 'none', fontSize: '1rem', color: '#2B1B24', cursor: 'pointer', appearance: 'none' }}>
              <option value="">Select Length (Short, Medium, Long, XL)</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
              <option value="xl">Extra Long</option>
            </select>

            <textarea placeholder="Describe your dream set (colors, themes, inspiration)..." rows="4" style={{ padding: '15px 20px', borderRadius: '15px', border: '1px solid rgba(200, 142, 167, 0.3)', background: 'rgba(255,255,255,0.9)', outline: 'none', fontSize: '1rem', color: '#2B1B24', resize: 'none' }}></textarea>

            <button style={{ 
              padding: '18px 30px', 
              borderRadius: '50px', 
              border: 'none', 
              background: '#2B1B24', 
              color: '#FFF0F5', 
              fontSize: '1rem', 
              letterSpacing: '2px', 
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              marginTop: '10px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              SEND INQUIRY
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
