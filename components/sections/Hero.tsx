"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import GlowButton from '../ui/GlowButton';

import Skeleton from '../ui/Skeleton';

const ParticleField = dynamic(() => import('../three/ParticleField'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background/50 animate-pulse" />
});

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleField />
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div variants={item} className="mb-8">
          <SectionLabel text="AGENTIC AI & DIGITAL PRODUCT STUDIO" />
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-8xl font-bold font-syne leading-[1.1] tracking-tight text-text mb-6">
          We Don&apos;t Build Software.<br />
          <span className="chrome-text">We Build Autonomous Engines.</span>
        </motion.h1>

        <motion.p variants={item} className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 font-dm-sans">
          A lean team of three architects eliminating operational friction for founders who are ready to automate everything.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <GlowButton label="Start a Project" variant="primary" href="#contact" />
          <GlowButton label="See Our Work ↓" variant="outline" href="#services" />
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-glass">
          <div className="text-center">
            <div className="text-chrome font-syne font-bold text-2xl mb-1">03</div>
            <div className="text-muted text-xs uppercase tracking-widest">Specialists</div>
          </div>
          <div className="text-center">
            <div className="text-chrome font-syne font-bold text-2xl mb-1">100%</div>
            <div className="text-muted text-xs uppercase tracking-widest">Founders</div>
          </div>
          <div className="text-center">
            <div className="text-chrome font-syne font-bold text-2xl mb-1">GLOBAL</div>
            <div className="text-muted text-xs uppercase tracking-widest">Tamil Nadu → Global</div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chrome opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
