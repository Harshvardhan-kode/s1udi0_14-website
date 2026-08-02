import React, { useState, useEffect } from 'react';

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '15px 0' : '25px 0',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(20, 10, 16, 0.7)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px'
      }}>
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          style={{
            color: '#FFF0F5',
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            transition: 'color 0.3s',
            opacity: 0.9,
            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#FFC0CB'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#FFF0F5'}
        >
          Home
        </a>
        
        <a 
          href="#vision" 
          onClick={(e) => scrollToSection(e, 'vision')}
          style={{
            color: '#FFF0F5',
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            transition: 'color 0.3s',
            opacity: 0.9,
            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#FFC0CB'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#FFF0F5'}
        >
          The Vision
        </a>

        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          style={{
            color: '#FFF0F5',
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            transition: 'color 0.3s',
            opacity: 0.9,
            textShadow: '0 2px 8px rgba(0,0,0,0.6)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#FFC0CB'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#FFF0F5'}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
