'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface GlassCard3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
  onClick?: () => void;
}

export const GlassCard3D: React.FC<GlassCard3DProps> = ({
  children,
  className = '',
  intensity = 15,
  glowColor = 'rgba(0, 102, 255, 0.25)',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    const xOffset = (xPct - 0.5) * (intensity * 2);
    const yOffset = (yPct - 0.5) * -(intensity * 2);

    x.set(xOffset);
    y.set(yOffset);

    setGlarePosition({
      x: xPct * 100,
      y: yPct * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`perspective-container relative group ${className}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          rotateX: mouseYSpring,
          rotateY: mouseXSpring,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full rounded-2xl transition-shadow duration-300 overflow-hidden glass-panel glass-panel-hover"
      >
        {/* Dynamic Glare / Specular highlight following mouse */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-30"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 350px at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor}, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full transform-gpu" style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};
