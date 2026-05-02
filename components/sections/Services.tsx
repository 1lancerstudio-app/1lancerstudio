"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Link, Shield, Palette, Share2, Video, BarChart3 } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    icon: <Bot size={24} />,
    title: "Agentic AI & Autonomous Systems",
    description: "We build AI that doesn't just chat — it executes. Lead qualification, appointment booking, inventory management, all running without human intervention.",
    tags: ["Autonomous Agents", "Custom LLM Workflows", "OpenAI / Gemini", "Agentic Logic"]
  },
  {
    icon: <Zap size={24} />,
    title: "High-Performance Digital Products",
    description: "Next.js web platforms and mobile apps built to 2026 standards. Fast, scalable, with integrated OCR, INR payment gateways, and real-time sync.",
    tags: ["Next.js", "MERN Stack", "iOS & Android", "Liquid Glass UI"]
  },
  {
    icon: <Link size={24} />,
    title: "Workflow Architecture & Efficiency",
    description: "We connect your fragmented tools — WhatsApp, Slack, CRM — into a single automated pipeline. Your business runs while you sleep.",
    tags: ["BPA", "Data Dashboards", "API Integrations", "War Room Views"]
  },
  {
    icon: <Shield size={24} />,
    title: "Technical Hardening & Strategy",
    description: "We audit, harden, and optimize. Security reviews, performance tuning, and Fractional CTO-level strategy for brands that can't afford technical debt.",
    tags: ["Cybersecurity", "Technical Audits", "Performance", "Fractional CTO"]
  },
  {
    icon: <Palette size={24} />,
    title: "High-Impact Visual Design",
    description: "From Neubrutalist pitch decks to high-end event posters and official brand guidelines. We transform corporate boring into elite premium.",
    tags: ["Ad Creatives", "Pitch Decks", "Poster Design", "Brand Guidelines"]
  },
  {
    icon: <Share2 size={24} />,
    title: "Social Media & Growth Campaigns",
    description: "30-day hype launch sequences, educational carousel series, and strategy-driven growth posts. We position CEOs as technical thought leaders.",
    tags: ["Launch Campaigns", "LinkedIn Ghostwriting", "Lead Gen", "Carousels"]
  },
  {
    icon: <Video size={24} />,
    title: "Multi-Media & Motion Graphics",
    description: "High-fidelity UI walkthroughs, AI-generated imagery (Midjourney/DALL-E), and fast-paced technical demos for Reels and TikTok.",
    tags: ["Motion Graphics", "AI Imagery", "Short-form Video", "UI Walkthroughs"]
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Campaign Strategy & Management",
    description: "A/B testing ad sets, full content scheduling, and deep-dive monthly analytics reporting on lead performance and conversion ROI.",
    tags: ["A/B Testing", "Content Scheduling", "Analytics", "ROI Tracking"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionLabel text="WHAT WE BUILD" />
          <h2 className="text-4xl md:text-5xl font-bold font-syne mt-6 text-text">
            Eight Specialized Pillars of the<br />
            <span className="chrome-text italic">Autonomous Studio</span>
          </h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
