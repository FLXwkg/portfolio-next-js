'use client';

import { useEffect } from 'react';
import { initFaro } from '../utils/faro-init';

export function FaroSetup() {
  useEffect(() => {
    initFaro();
  }, []);

  return null;
}