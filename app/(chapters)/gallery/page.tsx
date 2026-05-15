"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Flower, Sparkles, X, Download, ArrowLeft, Heart } from 'lucide-react';

interface MediaPolaroidProps {
  title: string;
  subtitle: string;
  mediaSrc: string;
  type: 'image' | 'video';
  onClick?: () => void;
}

// --- BACKGROUND FLOATING HEARTS ---
const FloatingHearts = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: -100,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          <Heart fill="currentColor" size={32} />
        </motion.div>
      ))}
    </div>
  );
};

const MediaPolaroid = ({ title, subtitle, mediaSrc, type, onClick }: MediaPolaroidProps) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02, rotate: (Math.random() > 0.5 ? 2 : -2) }}
    onClick={onClick}
    className="bg-white p-3 sm:p-4 rounded-[2rem] shadow-xl border-2 border-pink-100 w-full cursor-pointer transition-shadow hover:shadow-pink-200/50"
  >
    <div className={`relative overflow-hidden rounded-2xl border border-pink-100 ${type === 'video' ? 'bg-slate-900 aspect-video' : 'bg-slate-100 aspect-square'}`}>
      {type === 'video' ? (
        <video 
          src={mediaSrc} 
          controls 
          onPlay={() => window.dispatchEvent(new Event('pauseBackgroundMusic'))}
          onPause={() => window.dispatchEvent(new Event('resumeBackgroundMusic'))}
          onEnded={() => window.dispatchEvent(new Event('resumeBackgroundMusic'))}
          className="w-full h-full object-contain rounded-2xl bg-slate-900"
        />
      ) : (
        <img src={mediaSrc} alt={title} loading="lazy" className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105" />
      )}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-5 sm:h-6 bg-white/40 backdrop-blur-sm rotate-2 shadow-sm border border-white/50 z-10" />
    </div>
    <div className="mt-4 text-center pb-2 px-2">
      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-800 truncate">{title}</h3>
      {subtitle && <p className="text-[10px] sm:text-xs font-bold text-pink-400 uppercase tracking-widest mt-1">{subtitle}</p>}
    </div>
  </motion.div>
);

export default function GalleryPage() {
  const [currentView, setCurrentView] = useState<'albums' | 'flowering' | 'alagar' | 'couple' | 'mehendi'>('albums');
  const [selectedMedia, setSelectedMedia] = useState<MediaPolaroidProps | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const floweringMedia: MediaPolaroidProps[] & { id: string }[] = [
    { id: "f-1", type: "image", title: "Memory #1", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/1.jpeg" },
    { id: "f-2", type: "image", title: "Memory #2", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/2.jpeg" },
    { id: "f-3", type: "image", title: "Memory #3", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/3.jpeg" },
    { id: "f-4", type: "image", title: "Memory #4", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/4.jpeg" },
    { id: "f-5", type: "image", title: "Memory #5", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/5.jpeg" },
    { id: "f-6", type: "image", title: "Memory #6", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/6.jpeg" },
    { id: "f-7", type: "image", title: "Memory #7", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/7.jpeg" },
    { id: "f-8", type: "image", title: "Memory #8", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/8.jpeg" },
    { id: "f-9", type: "image", title: "Memory #9", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/9.jpeg" },
    { id: "f-10", type: "image", title: "Memory #10", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/10.jpeg" },
    { id: "f-11", type: "image", title: "Memory #11", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/11.jpeg" },
    { id: "f-12", type: "image", title: "Memory #12", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/12.jpeg" },
    { id: "f-13", type: "image", title: "Memory #13", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/13.jpeg" },
    { id: "f-14", type: "image", title: "Memory #14", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/14.jpeg" },
    { id: "f-15", type: "image", title: "Memory #15", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/15.jpeg" },
    { id: "f-16", type: "image", title: "Memory #16", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/16.jpeg" },
    { id: "f-17", type: "image", title: "Memory #17", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/17.jpeg" },
    { id: "f-18", type: "image", title: "Memory #18", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/18.jpeg" },
    { id: "f-19", type: "image", title: "Memory #19", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/19.jpeg" },
    { id: "f-20", type: "image", title: "Memory #20", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/20.jpeg" },
    { id: "f-21", type: "image", title: "Memory #21", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/21.jpeg" },
    { id: "f-22", type: "image", title: "Memory #22", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/22.jpeg" },
    { id: "f-23", type: "image", title: "Memory #23", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/23.jpeg" },
    { id: "f-24", type: "image", title: "Memory #24", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/24.jpeg" },
    { id: "f-25", type: "image", title: "Memory #25", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/25.jpeg" },
    { id: "f-26", type: "image", title: "Memory #26", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/26.jpeg" },
    { id: "f-27", type: "image", title: "Memory #27", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/27.jpeg" },
    { id: "f-28", type: "image", title: "Memory #28", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/28.jpeg" },
    { id: "f-29", type: "image", title: "Memory #29", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/29.jpeg" },
    { id: "f-30", type: "image", title: "Memory #30", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/30.jpeg" },
    { id: "f-31", type: "image", title: "Memory #31", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/31.jpeg" },
    { id: "f-32", type: "image", title: "Memory #32", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/32.jpeg" },
    { id: "f-33", type: "image", title: "Memory #33", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/33.jpeg" },
    { id: "f-34", type: "image", title: "Memory #34", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/34.jpeg" },
    { id: "f-35", type: "image", title: "Memory #35", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/35.jpeg" },
    { id: "f-36", type: "image", title: "Memory #36", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/36.jpeg" },
    { id: "f-37", type: "image", title: "Memory #37", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/37.jpeg" },
    { id: "f-38", type: "image", title: "Memory #38", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/38.jpeg" },
    { id: "f-39", type: "image", title: "Memory #39", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/39.jpeg" },
    { id: "f-40", type: "image", title: "Memory #40", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/40.jpeg" },
    { id: "f-41", type: "image", title: "Memory #41", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/41.jpeg" },
    { id: "f-42", type: "image", title: "Memory #42", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/42.jpeg" },
    { id: "f-43", type: "image", title: "Memory #43", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/43.jpeg" },
    { id: "f-44", type: "image", title: "Memory #44", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/44.jpeg" },
    { id: "f-45", type: "image", title: "Memory #45", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/45.jpeg" },
    { id: "f-46", type: "image", title: "Memory #46", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/46.jpeg" },
    { id: "f-47", type: "image", title: "Memory #47", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/47.jpeg" },
    { id: "f-48", type: "image", title: "Memory #48", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/48.jpeg" },
    { id: "f-49", type: "image", title: "Memory #49", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/49.jpeg" },
    { id: "f-50", type: "image", title: "Memory #50", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/50.jpeg" },
    { id: "f-51", type: "image", title: "Memory #51", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/51.jpeg" },
    { id: "f-52", type: "image", title: "Memory #52", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/52.jpeg" },
    { id: "f-53", type: "image", title: "Memory #53", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/53.jpeg" },
    { id: "f-54", type: "image", title: "Memory #54", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/54.jpeg" },
    { id: "f-55", type: "image", title: "Memory #55", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/55.jpeg" },
    { id: "f-56", type: "image", title: "Memory #56", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/56.jpeg" },
    { id: "f-57", type: "image", title: "Memory #57", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/57.jpeg" },
    { id: "f-58", type: "image", title: "Memory #58", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/58.jpeg" },
    { id: "f-59", type: "image", title: "Memory #59", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/59.jpeg" },
    { id: "f-60", type: "image", title: "Memory #60", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/60.jpeg" },
    { id: "f-61", type: "image", title: "Memory #61", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/61.jpeg" },
    { id: "f-62", type: "image", title: "Memory #62", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/62.jpeg" },
    { id: "f-63", type: "image", title: "Memory #63", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/63.jpeg" },
    { id: "f-64", type: "image", title: "Memory #64", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/64.jpeg" },
    { id: "f-65", type: "image", title: "Memory #65", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/65.jpeg" },
    { id: "f-66", type: "image", title: "Memory #66", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/66.jpeg" },
    { id: "f-67", type: "image", title: "Memory #67", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/67.jpeg" },
    { id: "f-68", type: "image", title: "Memory #68", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/68.jpeg" },
    { id: "f-69", type: "image", title: "Memory #69", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/69.jpeg" },
    { id: "f-70", type: "image", title: "Memory #70", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/70.jpeg" },
    { id: "f-71", type: "image", title: "Memory #71", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/71.jpeg" },
    { id: "f-72", type: "image", title: "Memory #72", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/72.jpeg" },
    { id: "f-73", type: "image", title: "Memory #73", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/73.jpeg" },
    { id: "f-74", type: "image", title: "Memory #74", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/74.jpeg" },
    { id: "f-75", type: "image", title: "Memory #75", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/75.jpeg" },
    { id: "f-76", type: "image", title: "Memory #76", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/76.jpeg" },
    { id: "f-77", type: "image", title: "Memory #77", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/77.jpeg" },
    { id: "f-78", type: "image", title: "Memory #78", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/78.jpeg" },
    { id: "f-79", type: "image", title: "Memory #79", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/79.jpeg" },
    { id: "f-80", type: "image", title: "Memory #80", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/80.jpeg" },
    { id: "f-81", type: "image", title: "Memory #81", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/81.jpeg" },
    { id: "f-82", type: "image", title: "Memory #82", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/82.jpeg" },
    { id: "f-83", type: "image", title: "Memory #83", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/83.jpeg" },
    { id: "f-84", type: "image", title: "Memory #84", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/84.jpeg" },
    { id: "f-85", type: "image", title: "Memory #85", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/85.jpeg" },
    { id: "f-86", type: "image", title: "Memory #86", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/86.jpeg" },
    { id: "f-87", type: "image", title: "Memory #87", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/87.jpeg" },
    { id: "f-88", type: "image", title: "Memory #88", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/88.jpeg" },
    { id: "f-89", type: "image", title: "Memory #89", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/89.jpeg" },
    { id: "f-90", type: "image", title: "Memory #90", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/90.jpeg" },
    { id: "f-91", type: "image", title: "Memory #91", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/91.jpeg" },
    { id: "f-92", type: "image", title: "Memory #92", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/92.jpeg" },
    { id: "f-93", type: "image", title: "Memory #93", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/93.jpeg" },
    { id: "f-94", type: "image", title: "Memory #94", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/94.jpeg" },
    { id: "f-95", type: "image", title: "Memory #95", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/95.jpeg" },
    { id: "f-96", type: "image", title: "Memory #96", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/96.jpeg" },
    { id: "f-97", type: "image", title: "Memory #97", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/97.jpeg" },
    { id: "f-98", type: "image", title: "Memory #98", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/98.jpeg" },
    { id: "f-99", type: "image", title: "Memory #99", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/99.jpeg" },
    { id: "f-100", type: "image", title: "Memory #100", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/100.jpeg" },
    { id: "f-101", type: "image", title: "Memory #101", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/101.jpeg" },
    { id: "f-102", type: "image", title: "Memory #102", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/102.jpeg" },
    { id: "f-103", type: "image", title: "Memory #103", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/103.jpeg" },
    { id: "f-104", type: "image", title: "Memory #104", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/104.jpeg" },
    { id: "f-105", type: "image", title: "Memory #105", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/105.jpeg" },
    { id: "f-106", type: "image", title: "Memory #106", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/106.jpeg" },
    { id: "f-107", type: "image", title: "Memory #107", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/107.jpeg" },
    { id: "f-108", type: "image", title: "Memory #108", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/108.jpeg" },
    { id: "f-109", type: "image", title: "Memory #109", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/109.jpeg" },
    { id: "f-110", type: "image", title: "Memory #110", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/110.jpeg" },
    { id: "f-111", type: "image", title: "Memory #111", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/111.jpeg" },
    { id: "f-112", type: "image", title: "Memory #112", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/112.jpeg" },
    { id: "f-113", type: "image", title: "Memory #113", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/113.jpeg" },
    { id: "f-114", type: "image", title: "Memory #114", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/114.jpeg" },
    { id: "f-115", type: "image", title: "Memory #115", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/115.jpeg" },
    { id: "f-116", type: "image", title: "Memory #116", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/116.jpeg" },
    { id: "f-117", type: "image", title: "Memory #117", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/117.jpeg" },
    { id: "f-118", type: "video", title: "Video #118", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/118.mp4" },
    { id: "f-119", type: "video", title: "Video #119", subtitle: "Ceremony", mediaSrc: "/gallery/Flowering-Ceremony/119.mp4" }
  ];

  const alagarMedia: MediaPolaroidProps[] & { id: string }[] = [
    { id: "a-1", type: "image", title: "Memory #1", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/1.jpeg" },
    { id: "a-2", type: "image", title: "Memory #2", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/2.jpeg" },
    { id: "a-3", type: "image", title: "Memory #3", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/3.jpeg" },
    { id: "a-4", type: "image", title: "Memory #4", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/4.jpeg" },
    { id: "a-5", type: "image", title: "Memory #5", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/5.jpeg" },
    { id: "a-6", type: "image", title: "Memory #6", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/6.jpeg" },
    { id: "a-7", type: "image", title: "Memory #7", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/7.jpeg" },
    { id: "a-8", type: "image", title: "Memory #8", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/8.jpeg" },
    { id: "a-9", type: "image", title: "Memory #9", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/9.jpeg" },
    { id: "a-10", type: "image", title: "Memory #10", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/10.jpeg" },
    { id: "a-11", type: "image", title: "Memory #11", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/11.jpeg" },
    { id: "a-12", type: "image", title: "Memory #12", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/12.jpeg" },
    { id: "a-13", type: "image", title: "Memory #13", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/13.jpeg" },
    { id: "a-14", type: "image", title: "Memory #14", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/14.jpeg" },
    { id: "a-15", type: "image", title: "Memory #15", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/15.jpeg" },
    { id: "a-16", type: "image", title: "Memory #16", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/16.jpeg" },
    { id: "a-17", type: "image", title: "Memory #17", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/17.jpeg" },
    { id: "a-18", type: "image", title: "Memory #18", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/18.jpeg" },
    { id: "a-19", type: "image", title: "Memory #19", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/19.jpeg" },
    { id: "a-20", type: "image", title: "Memory #20", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/20.jpeg" },
    { id: "a-21", type: "image", title: "Memory #21", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/21.jpeg" },
    { id: "a-22", type: "image", title: "Memory #22", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/22.jpeg" },
    { id: "a-23", type: "image", title: "Memory #23", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/23.jpeg" },
    { id: "a-24", type: "image", title: "Memory #24", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/24.jpeg" },
    { id: "a-25", type: "image", title: "Memory #25", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/29.jpeg" },
    { id: "a-26", type: "image", title: "Memory #26", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/30.jpeg" },
    { id: "a-27", type: "image", title: "Memory #27", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/31.jpeg" },
    { id: "a-28", type: "video", title: "Video #28", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/32.mp4" },
    { id: "a-29", type: "video", title: "Video #29", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/33.mp4" },
    { id: "a-30", type: "video", title: "Video #30", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/34.mp4" },
    { id: "a-31", type: "video", title: "Video #31", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/35.mp4" },
    { id: "a-32", type: "video", title: "Video #32", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/36.mp4" },
    { id: "a-33", type: "video", title: "Video #33", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/37.mp4" },
    { id: "a-34", type: "video", title: "Video #34", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/38.mp4" },
    { id: "a-35", type: "video", title: "Video #35", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/39.mp4" },
    { id: "a-36", type: "video", title: "Video #36", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/40.mp4" },
    { id: "a-37", type: "video", title: "Video #37", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/41.mp4" },
    { id: "a-38", type: "video", title: "Video #38", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/42.mp4" },
    { id: "a-39", type: "video", title: "Video #39", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/43.mp4" },
    { id: "a-40", type: "video", title: "Video #40", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/44.mp4" },
    { id: "a-41", type: "video", title: "Video #41", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/45.mp4" },
    { id: "a-42", type: "video", title: "Video #42", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/46.mp4" },
    { id: "a-43", type: "video", title: "Video #43", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/47.mp4" },
    { id: "a-44", type: "video", title: "Video #44", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/48.mp4" },
    { id: "a-45", type: "video", title: "Video #45", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/49.mp4" },
    { id: "a-46", type: "video", title: "Video #46", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/50.mp4" },
    { id: "a-47", type: "video", title: "Video #47", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/51.mp4" },
    { id: "a-48", type: "video", title: "Video #48", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/52.mp4" },
    { id: "a-49", type: "video", title: "Video #49", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/53.mp4" },
    { id: "a-50", type: "video", title: "Video #50", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/54.mp4" },
    { id: "a-51", type: "video", title: "Video #51", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/55.mp4" },
    { id: "a-52", type: "video", title: "Video #52", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/56.mp4" },
    { id: "a-53", type: "video", title: "Video #53", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/61.mp4" },
    { id: "a-54", type: "video", title: "Video #54", subtitle: "Atrocities", mediaSrc: "/gallery/Alagar-Kovil-Atrocities/62.mp4" }
  ];

  const coupleMedia: MediaPolaroidProps[] & { id: string }[] = [
    { id: "c-1", type: "image", title: "Memory #1", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/1.jpg" },
    { id: "c-2", type: "image", title: "Memory #2", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/2.jpg" },
    { id: "c-3", type: "image", title: "Memory #3", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/3.jpg" },
    { id: "c-4", type: "image", title: "Memory #4", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/4.jpg" },
    { id: "c-5", type: "image", title: "Memory #5", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/5.jpg" },
    { id: "c-6", type: "image", title: "Memory #6", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/6.jpg" },
    { id: "c-7", type: "image", title: "Memory #7", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/7.jpg" },
    { id: "c-8", type: "image", title: "Memory #8", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/8.jpg" },
    { id: "c-9", type: "image", title: "Memory #9", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/9.jpg" },
    { id: "c-10", type: "image", title: "Memory #10", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/10.jpg" },
    { id: "c-11", type: "image", title: "Memory #11", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/11.jpg" },
    { id: "c-12", type: "image", title: "Memory #12", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/12.jpg" },
    { id: "c-13", type: "image", title: "Memory #13", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/13.jpg" },
    { id: "c-14", type: "image", title: "Memory #14", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/14.jpg" },
    { id: "c-15", type: "image", title: "Memory #15", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/15.jpg" },
    { id: "c-16", type: "image", title: "Memory #16", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/16.jpg" },
    { id: "c-17", type: "image", title: "Memory #17", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/17.jpg" },
    { id: "c-18", type: "image", title: "Memory #18", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/18.jpg" },
    { id: "c-19", type: "image", title: "Memory #19", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/19.jpg" },
    { id: "c-20", type: "image", title: "Memory #20", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/20.jpg" },
    { id: "c-21", type: "image", title: "Memory #21", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/21.jpg" },
    { id: "c-22", type: "image", title: "Memory #22", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/22.jpg" },
    { id: "c-23", type: "image", title: "Memory #23", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/23.jpg" },
    { id: "c-24", type: "image", title: "Memory #24", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/24.jpg" },
    { id: "c-25", type: "image", title: "Memory #25", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/25.jpg" },
    { id: "c-26", type: "image", title: "Memory #26", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/26.jpg" },
    { id: "c-27", type: "image", title: "Memory #27", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/27.jpg" },
    { id: "c-28", type: "image", title: "Memory #28", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/28.jpg" },
    { id: "c-29", type: "image", title: "Memory #29", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/29.jpg" },
    { id: "c-30", type: "image", title: "Memory #30", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/30.jpg" },
    { id: "c-31", type: "image", title: "Memory #31", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/31.jpg" },
    { id: "c-32", type: "image", title: "Memory #32", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/32.jpg" },
    { id: "c-33", type: "image", title: "Memory #33", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/33.jpg" },
    { id: "c-34", type: "image", title: "Memory #34", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/34.jpg" },
    { id: "c-35", type: "image", title: "Memory #35", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/35.jpg" },
    { id: "c-36", type: "image", title: "Memory #36", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/36.jpg" },
    { id: "c-37", type: "image", title: "Memory #37", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/37.jpg" },
    { id: "c-38", type: "image", title: "Memory #38", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/38.jpg" },
    { id: "c-39", type: "image", title: "Memory #39", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/39.jpg" },
    { id: "c-40", type: "image", title: "Memory #40", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/40.jpg" },
    { id: "c-41", type: "image", title: "Memory #41", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/41.jpg" },
    { id: "c-42", type: "image", title: "Memory #42", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/42.jpg" },
    { id: "c-43", type: "image", title: "Memory #43", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/43.jpg" },
    { id: "c-44", type: "image", title: "Memory #44", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/44.jpg" },
    { id: "c-45", type: "image", title: "Memory #45", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/45.jpg" },
    { id: "c-46", type: "image", title: "Memory #46", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/46.jpg" },
    { id: "c-47", type: "image", title: "Memory #47", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/47.jpg" },
    { id: "c-48", type: "image", title: "Memory #48", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/48.jpg" },
    { id: "c-49", type: "image", title: "Memory #49", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/49.jpg" },
    { id: "c-50", type: "image", title: "Memory #50", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/50.jpg" },
    { id: "c-51", type: "image", title: "Memory #51", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/51.jpg" },
    { id: "c-52", type: "image", title: "Memory #52", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/52.jpg" },
    { id: "c-53", type: "image", title: "Memory #53", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/53.jpg" },
    { id: "c-54", type: "image", title: "Memory #54", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/54.jpg" },
    { id: "c-55", type: "image", title: "Memory #55", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/55.jpg" },
    { id: "c-56", type: "image", title: "Memory #56", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/56.jpg" },
    { id: "c-57", type: "image", title: "Memory #57", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/57.jpg" },
    { id: "c-58", type: "image", title: "Memory #58", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/58.jpg" },
    { id: "c-59", type: "image", title: "Memory #59", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/59.jpg" },
    { id: "c-60", type: "image", title: "Memory #60", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/60.jpg" },
    { id: "c-61", type: "image", title: "Memory #61", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/61.jpg" },
    { id: "c-62", type: "image", title: "Memory #62", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/62.jpg" },
    { id: "c-63", type: "image", title: "Memory #63", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/63.jpg" },
    { id: "c-64", type: "image", title: "Memory #64", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/64.jpg" },
    { id: "c-65", type: "image", title: "Memory #65", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/65.jpg" },
    { id: "c-66", type: "image", title: "Memory #66", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/66.jpg" },
    { id: "c-67", type: "image", title: "Memory #67", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/67.jpg" },
    { id: "c-68", type: "image", title: "Memory #68", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/68.jpg" },
    { id: "c-69", type: "image", title: "Memory #69", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/69.jpg" },
    { id: "c-70", type: "image", title: "Memory #70", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/70.jpg" },
    { id: "c-71", type: "image", title: "Memory #71", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/71.jpg" },
    { id: "c-72", type: "image", title: "Memory #72", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/72.jpg" },
    { id: "c-73", type: "image", title: "Memory #73", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/73.jpg" },
    { id: "c-74", type: "image", title: "Memory #74", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/74.jpg" },
    { id: "c-75", type: "image", title: "Memory #75", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/75.jpg" },
    { id: "c-76", type: "image", title: "Memory #76", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/76.jpg" },
    { id: "c-77", type: "image", title: "Memory #77", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/77.jpg" },
    { id: "c-78", type: "image", title: "Memory #78", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/78.jpg" },
    { id: "c-79", type: "image", title: "Memory #79", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/79.jpg" },
    { id: "c-80", type: "image", title: "Memory #80", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/80.jpg" },
    { id: "c-81", type: "image", title: "Memory #81", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/81.jpg" },
    { id: "c-82", type: "image", title: "Memory #82", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/82.jpg" },
    { id: "c-83", type: "image", title: "Memory #83", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/83.jpg" },
    { id: "c-84", type: "image", title: "Memory #84", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/84.jpg" },
    { id: "c-85", type: "image", title: "Memory #85", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/85.jpg" },
    { id: "c-86", type: "image", title: "Memory #86", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/86.jpg" },
    { id: "c-87", type: "image", title: "Memory #87", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/87.jpg" },
    { id: "c-88", type: "video", title: "Video #88", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/88.mp4" },
    { id: "c-89", type: "video", title: "Video #89", subtitle: "Chronicles", mediaSrc: "/gallery/Couple-Chronicles/89.mp4" }
  ];

  const mehendiMedia: MediaPolaroidProps[] & { id: string }[] = [
    { id: "m-1", type: "image", title: "Memory #1", subtitle: "Madness", mediaSrc: "/gallery/Mehendi-Madness/1.jpg" },
    { id: "m-2", type: "image", title: "Memory #2", subtitle: "Madness", mediaSrc: "/gallery/Mehendi-Madness/2.jpg" },
    { id: "m-8", type: "image", title: "Memory #3", subtitle: "Madness", mediaSrc: "/gallery/Mehendi-Madness/8.jpeg" },
    { id: "m-3", type: "video", title: "Video #4", subtitle: "Madness", mediaSrc: "/gallery/Mehendi-Madness/3.mp4" },
    { id: "m-4", type: "video", title: "Video #5", subtitle: "Madness", mediaSrc: "/gallery/Mehendi-Madness/4.mp4" },
    { id: "m-5", type: "video", title: "Video #6", subtitle: "Madness", mediaSrc: "/gallery/Mehendi-Madness/5.mp4" },
    { id: "m-6", type: "video", title: "Video #7", subtitle: "Madness", mediaSrc: "/gallery/Mehendi-Madness/6.mp4" }
  ];

  const activeMedia = 
    currentView === 'flowering' ? floweringMedia :
    currentView === 'alagar' ? alagarMedia :
    currentView === 'couple' ? coupleMedia :
    currentView === 'mehendi' ? mehendiMedia : [];

  return (
    <main className="relative min-h-screen pt-24 sm:pt-32 pb-24 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F7] to-pink-50/50 overflow-hidden">
      
      {/* Background Hearts */}
      <FloatingHearts />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-10 sm:mb-16 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center w-full"
        >
          <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-pink-100 text-pink-500 rounded-full mb-4 sm:mb-6 shadow-sm">
            <Camera className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-pink-600 mb-4 font-bold flex items-center justify-center gap-2 sm:gap-4 text-center">
            <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
            {currentView === 'albums' ? 'Our Memories' : 'Album View'}
            <Heart className="text-pink-500 hidden sm:block w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
          </h2>

          {currentView === 'albums' && (
            <p className="text-sm sm:text-lg text-slate-500 max-w-xl mx-auto px-2">
              A messy, beautiful collection of our favorite things, comfort moments, and atrocities.
            </p>
          )}
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {currentView === 'albums' ? (
          // --- ALBUMS VIEW ---
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          >
            {[
              { id: 'flowering', title: 'Flowering Ceremony', count: floweringMedia.length, img: floweringMedia[15]?.mediaSrc || floweringMedia[0]?.mediaSrc },
              { id: 'alagar', title: 'Alagar Kovil Atrocities', count: alagarMedia.length, img: alagarMedia[0]?.mediaSrc },
              { id: 'couple', title: 'Couple Chronicles', count: coupleMedia.length, img: coupleMedia[6]?.mediaSrc || coupleMedia[0]?.mediaSrc },
              { id: 'mehendi', title: 'Mehendi Madness', count: mehendiMedia.length, img: mehendiMedia[0]?.mediaSrc }
            ].map((album) => (
              <div
                key={album.id}
                onClick={() => setCurrentView(album.id as any)}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-xl border-4 sm:border-8 border-white transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-pink-200/50">
                  <img
                    src={album.img} 
                    alt={album.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="mt-4 sm:mt-6 text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-1 transition-colors group-hover:text-pink-600">
                    {album.title}
                  </h3>
                  <p className="text-pink-400 font-bold tracking-widest uppercase text-[10px] sm:text-xs">
                    {album.count} Memories
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          // --- INSIDE FOLDER VIEW ---
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <button 
              onClick={() => setCurrentView('albums')}
              className="mb-8 sm:mb-10 flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-white border-2 border-pink-100 text-pink-500 hover:bg-pink-50 hover:text-pink-600 rounded-full text-sm sm:text-base font-bold transition-all shadow-sm group mx-auto md:mx-0"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Back to Albums
            </button>

            <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-8 sm:mb-10 border-b-2 border-pink-100 pb-4">
              <h3 className="text-2xl sm:text-4xl font-serif text-slate-800 font-bold text-center md:text-left">
                {currentView === 'flowering' ? 'Flowering Ceremony' : 
                 currentView === 'alagar' ? 'Alagar Kovil Atrocities' :
                 currentView === 'couple' ? 'Couple Chronicles' : 'Mehendi Madness'}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {activeMedia.map((media, index) => (
                <MediaPolaroid
                  key={index}
                  type={media.type} 
                  title={media.title} 
                  subtitle={media.subtitle} 
                  mediaSrc={media.mediaSrc} 
                  onClick={() => setSelectedMedia(media)} 
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* MODAL PORTAL */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-md cursor-zoom-out p-4"
              style={{ zIndex: 999999 }} 
            >
              <div className="absolute flex gap-3 top-6 right-6 z-[1000000]">
                <a 
                  href={selectedMedia.mediaSrc} 
                  download={selectedMedia.title}
                  onClick={(e) => e.stopPropagation()} 
                  className="text-slate-700 bg-white/90 hover:bg-pink-500 hover:text-white rounded-full p-3 transition-colors shadow-lg border border-pink-100 flex items-center justify-center"
                >
                  <Download size={20} />
                </a>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedMedia(null); }}
                  className="text-slate-700 bg-white/90 hover:bg-pink-500 hover:text-white rounded-full p-3 transition-colors shadow-lg border border-pink-100 flex items-center justify-center"
                >
                  <X size={20} />
                </button>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col items-center justify-center w-full max-w-5xl h-full"
              >
                <div className="relative w-full h-[70vh] flex items-center justify-center">
                  {selectedMedia.type === 'video' ? (
                    <video src={selectedMedia.mediaSrc} controls autoPlay className="max-w-full max-h-full rounded-xl shadow-2xl bg-black border border-white/10 object-contain" />
                  ) : (
                    <img src={selectedMedia.mediaSrc} alt={selectedMedia.title} className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10 object-contain" />
                  )}
                </div>
                <div className="mt-8 text-center text-white bg-white/10 px-6 sm:px-10 py-3 sm:py-4 rounded-full border border-white/20 backdrop-blur-lg">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold">{selectedMedia.title}</h3>
                  <p className="text-[10px] sm:text-xs font-bold text-pink-400 uppercase tracking-widest mt-1">{selectedMedia.subtitle}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body 
      )}
    </main>
  );
}