"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, tags }) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: 'rgba(200, 208, 224, 0.4)' }}
      className="glass-card rounded-2xl p-8 group transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-lg bg-border flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-syne font-bold mb-3 text-text">
        {title}
      </h3>
      
      <p className="text-muted text-sm leading-relaxed mb-6 font-dm-sans">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="px-2 py-0.5 rounded-full border border-border text-[10px] text-muted uppercase tracking-wider font-syne"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
