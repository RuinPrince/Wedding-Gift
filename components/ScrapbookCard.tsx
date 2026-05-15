"use client";
import React from 'react';

export const ScrapbookCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border-2 border-pink-100 shadow-sm">
      {children}
    </div>
  );
};