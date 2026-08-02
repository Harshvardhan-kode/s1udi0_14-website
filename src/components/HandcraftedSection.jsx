import React from 'react';
import DomeGallery from './DomeGallery';

const NAIL_COLLECTION = [
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000', alt: 'Petal Affair - Floral Pink Nails' },
  { src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000', alt: 'Mocha Chrome Sets' },
  { src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1000', alt: 'Damon Salvatore Coded Dark Cherry' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000', alt: 'Coquette Bow Sets' },
  { src: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000', alt: 'Korean Aesthetic Jelly Nails' },
  { src: 'https://images.unsplash.com/photo-1595868846356-896f6004b50c?q=80&w=1000', alt: 'Luxury Press On Set' }
];

export default function HandcraftedSection() {
  return (
    <section style={{ width: '100%', height: '100vh', backgroundColor: '#140A10', position: 'relative', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', paddingTop: '60px', color: '#FFF0F5', zIndex: 10, position: 'relative' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', margin: 0, letterSpacing: '2px' }}>
          LATEST DROPS & GALLERY
        </h2>
        <p style={{ opacity: 0.8, fontStyle: 'italic', marginTop: '8px' }}>
          Drag to orbit • Click any set to inspect details
        </p>
      </div>

      <div style={{ width: '100%', height: 'calc(100vh - 150px)', position: 'relative' }}>
        <DomeGallery
          images={NAIL_COLLECTION}
          grayscale={false}
          overlayBlurColor="#140A10"
          fit={0.65}
          minRadius={500}
          imageBorderRadius="24px"
          openedImageBorderRadius="20px"
          openedImageWidth="380px"
          openedImageHeight="500px"
          dragSensitivity={15}
          dragDampening={0.8}
        />
      </div>
    </section>
  );
}
