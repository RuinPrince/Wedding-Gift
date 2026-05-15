"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X } from 'lucide-react'; // Added Menu and X icons
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  const links = [
    { name: 'Welcome', path: '/' },
    { name: 'Stars', path: '/moon'},
    { name: 'Vault', path: '/our-story' },
    { name: 'Gossip', path: '/newspaper'},
    { name: 'Terms', path: '/contract'},
    { name: 'Melodies', path: '/symphony'},
    { name: 'Echoes', path: '/voices'},
    { name: 'Moments', path: '/gallery'},
    { name: 'Predictions', path: '/letters'}
  ];

  // Close the menu automatically when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[99999] bg-white/80 backdrop-blur-md border-b-2 border-pink-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link 
          href="/" 
          onClick={handleLinkClick}
          className="flex items-center gap-2 text-xl sm:text-2xl font-serif font-black text-pink-600 uppercase tracking-tighter relative z-50"
        >
          <Heart fill="currentColor" size={24} className="text-pink-400" />
          P & P
        </Link>

        {/* DESKTOP NAVIGATION (Hidden on mobile/tablet, visible on large screens) */}
        {/* Used lg:flex because 9 links require a lot of horizontal space! */}
        <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`font-bold text-xs xl:text-sm uppercase tracking-wider transition-colors hover:text-pink-500 ${
                pathname === link.path ? 'text-pink-600 border-b-2 border-pink-500 pb-1' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU TOGGLE BUTTON (Visible on mobile/tablet, hidden on large screens) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-pink-500 hover:text-pink-600 focus:outline-none relative z-50 p-2 -mr-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b-2 border-pink-200 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-4 max-h-[70vh] overflow-y-auto">
              {links.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  onClick={handleLinkClick}
                  className={`py-4 font-bold text-sm uppercase tracking-wider transition-colors border-b border-pink-50 last:border-0 ${
                    pathname === link.path ? 'text-pink-600 pl-2 border-l-4 border-l-pink-500 border-b-0 bg-pink-50/50' : 'text-slate-500 hover:text-pink-400 hover:pl-2'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}