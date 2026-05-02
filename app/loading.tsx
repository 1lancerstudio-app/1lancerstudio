import React from 'react';
import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="bg-background min-h-screen px-6 pt-32 space-y-24">
      {/* Hero Skeleton */}
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-8">
        <Skeleton className="w-64 h-8 rounded-full" />
        <Skeleton className="w-full h-24 md:h-32" />
        <Skeleton className="w-3/4 h-6" />
        <div className="flex gap-4">
          <Skeleton className="w-40 h-12 rounded-full" />
          <Skeleton className="w-40 h-12 rounded-full" />
        </div>
      </div>

      {/* Services Skeleton */}
      <div className="max-w-7xl mx-auto space-y-8">
        <Skeleton className="w-48 h-6" />
        <div className="grid md:grid-cols-2 gap-6">
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>

      {/* About Skeleton */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <Skeleton className="w-40 h-6" />
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-32" />
        </div>
        <Skeleton className="h-80 rounded-2xl" />
      </div>
    </div>
  );
}
