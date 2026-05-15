"use client";
import FloatingHearts from "@/components/FloatingHearts";

export default function ChapterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFF5F7] relative overflow-x-hidden">
      {/* 1. Global Theme Elements for sub-pages */}
      <FloatingHearts />
      
      {/* 2. Decorative Blobs from the home page style */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-pink-200/40 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-pink-300/30 rounded-full filter blur-[150px] pointer-events-none z-0" />

      {/* 3. Content with padding-top to avoid being hidden by Navbar */}
      <div className="relative z-10 pt-20">
        {children}
      </div>
    </div>
  );
}