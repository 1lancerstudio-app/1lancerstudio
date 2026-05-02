"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle' | 'text';
}

const Skeleton: React.FC<SkeletonProps> = ({ className, variant = 'rect' }) => {
  return (
    <div 
      className={cn(
        "animate-pulse bg-white/5 border border-white/10",
        variant === 'circle' ? "rounded-full" : "rounded-xl",
        variant === 'text' ? "h-4 w-full rounded" : "",
        className
      )}
    />
  );
};

export const HeroSkeleton = () => (
  <div className="max-w-5xl mx-auto px-6 text-center pt-32 md:pt-48 space-y-8">
    <Skeleton className="h-6 w-48 mx-auto rounded-full" />
    <div className="space-y-4">
      <Skeleton className="h-16 md:h-24 w-full" />
      <Skeleton className="h-16 md:h-24 w-3/4 mx-auto" />
    </div>
    <Skeleton className="h-20 w-2/3 mx-auto" />
    <div className="flex justify-center gap-4">
      <Skeleton className="h-12 w-40 rounded-full" />
      <Skeleton className="h-12 w-40 rounded-full" />
    </div>
  </div>
);

export const ServiceSkeleton = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="glass-card p-8 rounded-2xl space-y-4">
        <Skeleton className="h-12 w-12 rounded-lg" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-20 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

export default Skeleton;
