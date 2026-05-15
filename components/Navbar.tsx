"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // Removed the Login link from this array
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b-2 border-pink-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-serif font-black text-pink-600 uppercase tracking-tighter">
          <Heart fill="currentColor" size={24} className="text-pink-400" />
          P & P
        </Link>
        <div className="flex gap-6 items-center">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`font-bold text-sm uppercase tracking-wider transition-colors hover:text-pink-500 ${
                pathname === link.path ? 'text-pink-600 border-b-2 border-pink-500 pb-1' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}