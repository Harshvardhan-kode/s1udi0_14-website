import React, { useEffect, useRef } from 'react';

export default function LineWaves({
  speed = 0.2,
  innerLineCount = 30,
  outerLineCount = 38,
  warpIntensity = 1.2,
  rotation = -35,
  edgeFadeWidth = 0.15,
  colorCycleSpeed = 0.5,
  brightness = 0.45,
  color1 = '#FFC0CB',
  color2 = '#FFE4E1',
  color3 = '#E6C280',
  enableMouseInteraction = true,
  mouseInfluence = 2.5
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Mouse tracking for interaction
    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let targetMouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (e) => {
      if (!enableMouseInteraction) return;
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Convert hex to rgb string for gradient
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    };

    const draw = () => {
      time += speed * 0.05;
      
      // Smooth mouse interpolation
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      ctx.fillStyle = '#140A10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      const totalLines = innerLineCount;
      const spacing = canvas.height / totalLines;

      for (let i = 0; i < totalLines; i++) {
        const y = i * spacing;
        
        ctx.beginPath();
        ctx.moveTo(0, y);

        for (let x = 0; x <= canvas.width; x += 20) {
          // Distance from mouse for ripple
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const mouseEffect = Math.max(0, 150 - distance) / 150 * mouseInfluence * 20;

          // Wave math
          const wave1 = Math.sin(x * 0.01 + time) * 30 * warpIntensity;
          const wave2 = Math.cos(x * 0.02 - time * 0.5) * 20 * warpIntensity;
          
          ctx.lineTo(x, y + wave1 + wave2 - mouseEffect);
        }

        // Gradient coloring
        const gradient = ctx.createLinearGradient(0, y, canvas.width, y);
        const shift = Math.sin(time * colorCycleSpeed) * 0.5 + 0.5;
        
        gradient.addColorStop(0, `rgba(${hexToRgb(color1)}, ${brightness})`);
        gradient.addColorStop(shift, `rgba(${hexToRgb(color2)}, ${brightness})`);
        gradient.addColorStop(1, `rgba(${hexToRgb(color3)}, ${brightness})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, innerLineCount, warpIntensity, rotation, colorCycleSpeed, brightness, color1, color2, color3, enableMouseInteraction, mouseInfluence]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1 
      }} 
    />
  );
}
