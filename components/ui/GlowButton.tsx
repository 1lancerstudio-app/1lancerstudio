"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // I'll create a simple utils file

interface GlowButtonProps {
  label: string;
  variant?: 'primary' | 'outline';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: 'button' | 'submit';
  href?: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  label, 
  variant = 'primary', 
  onClick, 
  className,
  type = 'button',
  href
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-syne cursor-pointer";
  
  const variants = {
    primary: "bg-chrome bg-chrome-gradient text-background hover:scale-105 active:scale-95 shimmer-btn shadow-[0_0_20px_rgba(200,208,224,0.3)]",
    outline: "bg-transparent border border-border text-muted hover:text-text hover:border-chrome backdrop-blur-sm"
  };

  const handleClick = (e: React.MouseEvent) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    if (onClick) onClick(e);
  };

  const content = (
    <>
      {label}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
        onClick={handleClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      onClick={handleClick}
    >
      {content}
    </motion.button>
  );
};

export default GlowButton;
