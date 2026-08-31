'use client';

import React from 'react';

/**
 * CSS-only floating particles for executive ambient hero depth.
 * Zero JS overhead, GPU-accelerated.
 */
export const HeroScene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <div className="hero-particles" aria-hidden="true">
        {/* Sapphire particles */}
        <span className="particle particle-sapphire" style={{ '--x': '12%', '--y': '18%', '--d': '8s', '--delay': '0s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-sapphire" style={{ '--x': '28%', '--y': '72%', '--d': '12s', '--delay': '1.2s', '--size': '2px' } as React.CSSProperties} />
        <span className="particle particle-sapphire" style={{ '--x': '45%', '--y': '35%', '--d': '10s', '--delay': '0.5s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-sapphire" style={{ '--x': '62%', '--y': '58%', '--d': '14s', '--delay': '2.1s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-sapphire" style={{ '--x': '78%', '--y': '22%', '--d': '9s', '--delay': '0.8s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-sapphire" style={{ '--x': '88%', '--y': '68%', '--d': '11s', '--delay': '3.2s', '--size': '2px' } as React.CSSProperties} />

        {/* Sky / Gold subtle sparkles */}
        <span className="particle particle-sky" style={{ '--x': '22%', '--y': '32%', '--d': '9s', '--delay': '0.7s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '42%', '--y': '78%', '--d': '13s', '--delay': '2.3s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '68%', '--y': '15%', '--d': '11s', '--delay': '1.1s', '--size': '4px' } as React.CSSProperties} />
        <span className="particle particle-sky" style={{ '--x': '85%', '--y': '42%', '--d': '10s', '--delay': '0.4s', '--size': '2px' } as React.CSSProperties} />

        {/* White sparkle particles */}
        <span className="particle particle-white" style={{ '--x': '15%', '--y': '45%', '--d': '10s', '--delay': '0.9s', '--size': '2px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '48%', '--y': '28%', '--d': '12s', '--delay': '2.0s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '75%', '--y': '65%', '--d': '8s', '--delay': '0.2s', '--size': '3px' } as React.CSSProperties} />
        <span className="particle particle-white" style={{ '--x': '58%', '--y': '8%', '--d': '11s', '--delay': '1.4s', '--size': '3px' } as React.CSSProperties} />
      </div>

      <style jsx>{`
        .hero-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          opacity: 0;
          will-change: transform, opacity;
          animation: float var(--d) var(--delay) infinite ease-in-out;
        }

        .particle-sapphire {
          background: #3B82F6;
          box-shadow: 0 0 6px 1px rgba(59, 130, 246, 0.4);
        }

        .particle-sky {
          background: #38BDF8;
          box-shadow: 0 0 6px 1px rgba(56, 189, 248, 0.35);
        }

        .particle-white {
          background: #FFFFFF;
          box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.6);
        }

        @keyframes float {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.5);
          }
          15% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
            transform: translate3d(
              calc(16px * sin(var(--d, 10s))),
              -25px,
              0
            ) scale(1);
          }
          85% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};
