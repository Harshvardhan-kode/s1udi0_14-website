import React, { useState } from 'react';
import Masonry from './Masonry';
import { X } from 'lucide-react';

const ITEMS = [
  { id: "1", img: "/attachments/IMG_20260731_215431_457.jpg", url: "#", height: 280 },
  { id: "2", img: "/attachments/IMG_20260731_215431_459.jpg", url: "#", height: 500 },
  { id: "3", img: "/attachments/IMG_20260731_215431_461.jpg", url: "#", height: 350 },
  { id: "4", img: "/attachments/IMG_20260731_215436_513.jpg", url: "#", height: 480 },
  { id: "5", img: "/attachments/IMG_20260731_215436_514.jpg", url: "#", height: 320 },
  { id: "6", img: "/attachments/IMG_20260731_215436_516.jpg", url: "#", height: 380 },
  { id: "7", img: "/attachments/IMG_20260731_215758_764.jpg", url: "#", height: 260 },
  { id: "8", img: "/attachments/IMG_20260731_215758_767.jpg", url: "#", height: 300 },
  { id: "9", img: "/attachments/IMG_20260731_215758_769.jpg", url: "#", height: 380 },
  { id: "10", img: "/attachments/IMG_20260731_215758_770.jpg", url: "#", height: 520 },
  { id: "11", img: "/attachments/IMG_20260731_215758_771.jpg", url: "#", height: 280 },
  { id: "12", img: "/attachments/IMG_20260731_215758_772.jpg", url: "#", height: 400 },
  { id: "13", img: "/attachments/IMG_20260731_215758_773.jpg", url: "#", height: 340 },
  { id: "14", img: "/attachments/IMG_20260731_215758_774.jpg", url: "#", height: 460 },
  { id: "15", img: "/attachments/IMG_20260731_215758_776.jpg", url: "#", height: 310 },
  { id: "16", img: "/attachments/IMG_20260731_215758_778.jpg", url: "#", height: 490 },
  { id: "17", img: "/attachments/IMG_20260731_215903_983.jpg", url: "#", height: 430 },
  { id: "18", img: "/attachments/IMG_20260731_215903_984.jpg", url: "#", height: 510 }
];

export default function MasonrySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (item) => {
    setSelectedImage(item.img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #2B1B24 0%, #140A10 40%, #2A111F 100%)', 
      padding: '100px 5% 50px 5%', 
      color: '#FFF0F5',
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '3.2rem', 
          margin: '0 0 10px 0', 
          letterSpacing: '2px',
          background: 'linear-gradient(to right, #FFC0CB, #E6C280)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          LATEST DROPS
        </h2>
        <p style={{ opacity: 0.9, fontStyle: 'italic', letterSpacing: '1px', color: '#FFE4E1' }}>
          Explore our complete collection of handcrafted press-on nails
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        <Masonry
          items={ITEMS}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={true}
          onImageClick={handleImageClick}
        />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(20, 10, 16, 0.85)',
            backdropFilter: 'blur(12px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <button 
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '30px',
              right: '40px',
              background: 'none',
              border: 'none',
              color: '#FFF',
              cursor: 'pointer',
              padding: '10px'
            }}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged nail set" 
            style={{
              maxHeight: '85vh',
              maxWidth: '90vw',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
