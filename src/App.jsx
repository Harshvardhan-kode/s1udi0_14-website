import React from 'react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import MasonrySection from './components/MasonrySection';
import VisionSection from './components/VisionSection';
import ShopByVibeSection from './components/ShopByVibeSection';
import InquirySection from './components/InquirySection';

export default function App() {
  return (
    <main style={{ backgroundColor: '#140A10', minHeight: '100vh', margin: 0, padding: 0 }}>
      <NavigationBar />
      <HeroSection />
      {/* Latest Drops using Masonry */}
      <MasonrySection />
      {/* Vision Section added back */}
      <VisionSection />
      <ShopByVibeSection />
      <InquirySection />
    </main>
  );
}
