import React, { useEffect, useRef } from 'react';
import './SoftAurora.css';

export default function SoftAurora({
  speed = 0.5,
  scale = 1.2,
  brightness = 0.85,
  color1 = '#FFC0CB',
  color2 = '#E6C280',
  noiseFrequency = 2.0,
  noiseAmplitude = 1.2,
  bandHeight = 0.5,
  bandSpread = 1.2,
  octaveDecay = 0.1,
  layerOffset = 0.2,
  colorSpeed = 0.8,
  enableMouseInteraction = true,
  mouseInfluence = 0.3
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      if (!enableMouseInteraction) return;
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Convert hex to rgb
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : {r:255,g:255,b:255};
    };

    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);

    const draw = () => {
      time += speed * 0.02;
      
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Dark background
      ctx.fillStyle = '#140A10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'screen';

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const mouseOffsetX = (mouse.x - centerX) * mouseInfluence;
      const mouseOffsetY = (mouse.y - centerY) * mouseInfluence;

      // Draw aurora bands
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        
        const layerTime = time + i * layerOffset;
        
        // Gradient for this band
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        
        const mix = (Math.sin(layerTime * colorSpeed) + 1) / 2;
        const r = c1.r * (1 - mix) + c2.r * mix;
        const g = c1.g * (1 - mix) + c2.g * mix;
        const b = c1.b * (1 - mix) + c2.b * mix;
        
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${brightness * (1 - i * octaveDecay)})`);
        gradient.addColorStop(1, `rgba(${c1.r}, ${c1.g}, ${c1.b}, 0)`);

        ctx.fillStyle = gradient;

        // Create a wavy path
        ctx.moveTo(0, canvas.height);
        for (let x = 0; x <= canvas.width; x += 20) {
          const nx = x / canvas.width * noiseFrequency * scale;
          const yWave1 = Math.sin(nx + layerTime) * canvas.height * bandSpread * noiseAmplitude;
          const yWave2 = Math.cos(nx * 2 - layerTime * 1.5) * canvas.height * 0.2;
          
          const baseY = canvas.height * (1 - bandHeight) - (i * 100);
          
          ctx.lineTo(x, baseY + yWave1 + yWave2 + mouseOffsetY);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, scale, brightness, color1, color2, noiseFrequency, noiseAmplitude, bandHeight, bandSpread, octaveDecay, layerOffset, colorSpeed, enableMouseInteraction, mouseInfluence]);

  return (
    <div className="soft-aurora-container">
      <canvas ref={canvasRef} className="soft-aurora-canvas" />
    </div>
  );
}
