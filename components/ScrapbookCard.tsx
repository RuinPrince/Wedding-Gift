"use client";
import React from 'react';

// Added className to the type definition here
export const ScrapbookCard = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => {
  return (
    // Used backticks (template literals) to merge your default styles with the incoming styles
    <div className={`bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border-2 border-pink-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
};