'use client';

import React from 'react';
import { r3f } from './global';

interface ThreeProps {
  children: React.ReactNode;
}

const Three: React.FC<ThreeProps> = ({ children }) => {
  return <r3f.In>{children}</r3f.In>;
};

export default Three;
