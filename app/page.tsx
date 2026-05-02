"use client";

import React from 'react';
import { useReducedMotion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';
import { HeroSkeleton, ServiceSkeleton } from '../components/ui/Skeleton';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    // Disable right-click on images
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    
    // Force scroll to top on every visit/refresh to ensure the Hero starts as intended
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Skeleton loading logic for slow connections
    if (typeof navigator !== 'undefined' && (navigator as any).connection) {
      const conn = (navigator as any).connection;
      const isSlow = conn.effectiveType === '2g' || conn.effectiveType === '3g' || conn.saveData;
      
      if (isSlow) {
        setIsLoading(true);
        // We show the skeleton for a few seconds to let the slow connection catch up
        const timer = setTimeout(() => setIsLoading(false), 2500);
        return () => clearTimeout(timer);
      }
    }

    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <main className="bg-background text-text min-h-screen">
      <Navbar />
      
      {isLoading ? (
        <div className="pt-20">
          <HeroSkeleton />
          <div className="py-24 px-6">
             <ServiceSkeleton />
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <Services />
          <About />
          <Team />
          <Contact />
        </>
      )}
      
      <Footer />
    </main>
  );
}
