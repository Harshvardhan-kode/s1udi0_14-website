import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

export default function DomeGallery({
  images = [],
  grayscale = false,
  overlayBlurColor = '#140A10',
  fit = 0.65,
  minRadius = 500,
  imageBorderRadius = '24px',
  openedImageBorderRadius = '20px',
  openedImageWidth = '380px',
  openedImageHeight = '500px',
  dragSensitivity = 15,
  dragDampening = 0.8
}) {
  const [activeImage, setActiveImage] = useState(null);
  const containerRef = useRef(null);
  const [radius, setRadius] = useState(minRadius);
  
  // Spring for rotation
  const [{ rotation }, api] = useSpring(() => ({
    rotation: 0,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  // Handle drag to rotate
  const bind = useDrag(({ movement: [mx], down, velocity: [vx], direction: [dx] }) => {
    if (activeImage !== null) return; // Disable drag if image is opened
    
    api.start({
      rotation: mx * (dragSensitivity / 100),
      immediate: down,
      config: { velocity: vx * dx * dragDampening }
    });
  });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setRadius(Math.max(minRadius, width * fit));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [minRadius, fit]);

  const numImages = images.length;
  const angleStep = 360 / numImages;

  return (
    <div 
      ref={containerRef}
      style={{ 
        width: '100%', 
        height: '100%', 
        perspective: '1200px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        touchAction: 'none',
        overflow: 'hidden',
        background: overlayBlurColor
      }}
      {...bind()}
    >
      <animated.div 
        style={{
          width: '300px',
          height: '400px',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: rotation.to(r => `rotateY(${r}deg)`)
        }}
      >
        {images.map((img, i) => {
          const angle = i * angleStep;
          const isActive = activeImage === i;
          
          return (
            <div 
              key={i}
              onClick={() => setActiveImage(isActive ? null : i)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: isActive ? openedImageWidth : '100%',
                height: isActive ? openedImageHeight : '100%',
                transform: isActive 
                  ? `rotateY(${-rotation.get()}deg) translateZ(200px) scale(1.2)` 
                  : `rotateY(${angle}deg) translateZ(${radius}px)`,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: isActive ? 'zoom-out' : 'pointer',
                zIndex: isActive ? 100 : 1,
                borderRadius: isActive ? openedImageBorderRadius : imageBorderRadius,
                overflow: 'hidden',
                boxShadow: isActive ? '0 30px 60px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: !isActive && grayscale ? 'grayscale(100%)' : 'none',
                  transition: 'filter 0.3s ease'
                }}
              />
              {/* Overlay shadow for depth when not active */}
              {!isActive && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%)',
                  pointerEvents: 'none'
                }} />
              )}
            </div>
          );
        })}
      </animated.div>
    </div>
  );
}
