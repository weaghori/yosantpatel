"use client";
import { useEffect } from 'react';

export default function MasonryTrigger() {
  useEffect(() => {
    // Dispatch immediate resize event
    window.dispatchEvent(new Event('resize'));

    // Dispatch delayed resize events to handle slower image downloads/renders
    const timer1 = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);

    const timer2 = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 600);

    const timer3 = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return null;
}
