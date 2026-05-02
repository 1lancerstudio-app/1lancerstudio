"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionLabel from '../ui/SectionLabel';

const team = [
  {
    badge: "ROLE A — STRATEGY",
    initial: "S",
    image: "/team/shreevatsan.jpeg",
    name: "Shreevatsan",
    domain: "Marketing · SEO · Business Architecture",
    mission: "Acts as the Top of the Funnel — identifying market gaps, designing ROI-first business logic, and bridging client problems to technical solutions.",
    tags: ["SEO", "Business Architecture", "Growth Strategy", "Market Analysis"]
  },
  {
    badge: "ROLE B — SYSTEMS",
    initial: "N",
    image: "/team/naven.jpeg",
    name: "Nevan",
    domain: "Agentic AI · Backend · Security · LLM",
    mission: "The Brain of the operation — building complex Agentic logic, hardening backend security, and engineering systems that are unbreakable and fast.",
    tags: ["Agentic Logic", "LLM Engineering", "API Infrastructure", "Database Security"]
  },
  {
    badge: "ROLE C — DELIVERY",
    initial: "A",
    image: "/team/arivuselvan.jpeg",
    name: "Arivuselvan",
    domain: "Frontend · UI/UX · Project Management",
    mission: "The Face and the Finish — translating logic into high-fidelity interfaces, managing timelines, and ensuring every delivery meets the Lancer Standard.",
    tags: ["Next.js", "React Three Fiber", "UI/UX", "Client Communication"]
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <SectionLabel text="THE ARCHITECTS" />
        <h2 className="text-4xl md:text-5xl font-bold font-syne mt-6 text-text">
          Three Specialists.<br />
          <span className="chrome-text">One Standard.</span>
        </h2>
        <p className="text-muted text-sm mt-4 max-w-xl mx-auto font-dm-sans">
          A chain of command built for speed, precision, and zero client disappointment.
        </p>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              className="glass-card rounded-2xl p-8 text-center flex flex-col items-center group"
            >
              <span className="px-3 py-1 rounded-full bg-border border border-glass text-[10px] text-chrome font-syne mb-6">
                {member.badge}
              </span>
              
              <div className="w-20 h-20 rounded-full relative mb-6 border-2 border-chrome/30 shadow-[0_0_20px_rgba(200,208,224,0.2)] group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-xl font-syne font-bold mt-6 text-text">
                {member.name}
              </h3>
              
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent mt-1 font-syne">
                {member.domain}
              </p>
              
              <p className="text-sm text-muted mt-6 leading-relaxed font-dm-sans text-left flex-grow">
                {member.mission}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-8 border-t border-glass pt-6 w-full">
                {member.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2 py-0.5 rounded-full border border-border text-[10px] text-muted font-syne"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
