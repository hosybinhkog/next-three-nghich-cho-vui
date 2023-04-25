'use client';

import { LegacyRef, useRef } from 'react';
import Scene from '../Scene';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="relative w-full h-full overflow-auto touch-auto">
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix="client"
      />
      <footer className="text-center mt-10">
        <a href="https://github.com/hosybinhkog">
          github: github.com/hosybinhkog
        </a>
      </footer>
    </div>
  );
};

export default HomeLayout;
