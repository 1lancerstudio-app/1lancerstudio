"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';

const About = () => {
  const [userInput, setUserInput] = useState('');
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setShowEasterEgg(true);
      setUserInput('');
    }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel text="THE PHILOSOPHY" />
          <h2 className="text-4xl md:text-5xl font-bold font-syne mt-6 text-text mb-4">
            Accuracy Over Agreement.
          </h2>
          <p className="text-chrome font-syne text-sm uppercase tracking-wider mb-8">
            We are not yes-men. We are Technical Skeptics.
          </p>
          
          <div className="space-y-6 text-muted font-dm-sans leading-relaxed">
            <p>
              Lancer Studio is a lean, elite unit — three architects who treat every system like a security audit. We verify every line of logic before it ships.
            </p>
            <p>
              We were built by founders who got burned by bloated agencies. So we operate differently: transparent, opinionated, and obsessed with ROI.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-glass space-y-6">
            <div className="flex gap-4">
              <span className="text-chrome font-syne font-bold">01</span>
              <p className="text-sm text-muted">We prioritize ROI over aesthetics (but deliver both)</p>
            </div>
            <div className="flex gap-4">
              <span className="text-chrome font-syne font-bold">02</span>
              <p className="text-sm text-muted">We act as Fractional CTOs, not just vendors</p>
            </div>
            <div className="flex gap-4">
              <span className="text-chrome font-syne font-bold">03</span>
              <p className="text-sm text-muted">Tamil Nadu-based. Globally competitive.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-chrome/20 to-transparent blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
          <div className="relative glass-card rounded-2xl p-6 font-mono text-xs md:text-sm leading-relaxed overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-glass pb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-muted ml-2 text-[10px]">lancer_studio.sh</span>
            </div>

            {/* Terminal Lines */}
            <div className="space-y-2">
              <p className="text-muted"># Operational Mode: 2026</p>
              <p><span className="text-accent">const</span> <span className="text-chrome">mission</span> = <span className="text-shimmer">&apos;Delete Manual Labor&apos;</span>;</p>
              <p><span className="text-accent">const</span> <span className="text-chrome">approach</span> = <span className="text-shimmer">&apos;Skeptical Engineering&apos;</span>;</p>
              <p>&nbsp;</p>
              <p><span className="text-accent">if</span> (client.hasBottleneck) {"{"}</p>
              <p className="pl-4"><span className="text-chrome">lancer</span>.<span className="text-accent">deploy</span>(AutonomousAgent);</p>
              <p>{"}"}</p>
              <p>&nbsp;</p>
              <div className="flex items-center gap-2 text-accent font-bold">
                <span>// Status: Operational ✓</span>
                <div className="flex items-center flex-grow">
                  <span className="text-text/50 mr-1 opacity-50">{">"}</span>
                  <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-text w-full caret-chrome"
                    spellCheck="false"
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Easter Egg Video Overlay */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setShowEasterEgg(false)}
              className="absolute top-6 right-6 z-[110] p-2 rounded-full bg-chrome/10 border border-chrome/20 text-chrome hover:bg-chrome/20 transition-all"
            >
              <X size={24} />
            </button>
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(200,208,224,0.2)] border border-glass">
              <video 
                src="/videos/easter-egg.mp4" 
                autoPlay 
                loop 
                controls
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-chrome/5 blur-[120px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
