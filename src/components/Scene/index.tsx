'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { r3f } from '@/helpers/global';
import { Preload } from '@react-three/drei';

const Scene = ({ ...props }) => {
  return (
    <Canvas {...props}>
      <r3f.Out />
      <Preload />
    </Canvas>
  );
};

export default Scene;
