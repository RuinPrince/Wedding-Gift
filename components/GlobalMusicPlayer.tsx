'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { usePathname } from 'next/navigation';

const PLAYLIST = [
  '/music/song1.mp3',
  '/music/song2.mp3',
  '/music/song3.mp3'
];

export default function GlobalMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const pathname = usePathname();
  
  // ALL States declared at the top (Strict React Rule)
  const [isMounted, setIsMounted] = useState(false);
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPausedByVideo, setIsPausedByVideo] = useState(false);

  // HOOK 1: Initial Load & Safety Check
  useEffect(() => {
    setIsMounted(true);
    if (sessionStorage.getItem('vaultUnlocked') === 'true') {
      setHasUnlocked(true);
    }
  }, []);

  // HOOK 2: Reset video pause state whenever the page changes
  useEffect(() => {
    setIsPausedByVideo(false);
  }, [pathname]);

  // HOOK 3: Initialize Audio Element safely
  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio(PLAYLIST[0]);
      audioRef.current.volume = 0.3;

      audioRef.current.addEventListener('ended', () => {
        setCurrentTrack((prev) => (prev + 1) % PLAYLIST.length);
      });
    }
  }, []);

  // HOOK 4: Handle Track Changes
  useEffect(() => {
    if (audioRef.current && hasUnlocked) {
      const audio = audioRef.current;
      audio.src = PLAYLIST[currentTrack];
      
      if (!isMuted && !isPausedByVideo) {
        audio.play().catch(e => console.log("Waiting for interaction:", e));
      }
    }
  }, [currentTrack, hasUnlocked]); 

  // HOOK 5: Play/Pause Master Controller
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !hasUnlocked) return;

    if (isMuted || isPausedByVideo) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log("Waiting for interaction:", e));
    }
  }, [isMuted, isPausedByVideo, hasUnlocked]);

  // HOOK 6: Listen for Video Play/Pause
  useEffect(() => {
    const handleLogin = () => setHasUnlocked(true);
    const handleVideoPlay = () => setIsPausedByVideo(true);
    const handleVideoPause = () => setIsPausedByVideo(false);

    window.addEventListener('unlockVault', handleLogin);
    window.addEventListener('pauseBackgroundMusic', handleVideoPlay);
    window.addEventListener('resumeBackgroundMusic', handleVideoPause);

    return () => {
      window.removeEventListener('unlockVault', handleLogin);
      window.removeEventListener('pauseBackgroundMusic', handleVideoPlay);
      window.removeEventListener('resumeBackgroundMusic', handleVideoPause);
    };
  }, []);

  // EARLY RETURN: This MUST stay at the very bottom, below all useEffects!
  if (!isMounted || !hasUnlocked) return null;

  return (
    <button
      onClick={() => setIsMuted(!isMuted)}
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-md border-2 border-pink-200 rounded-full shadow-[0_8px_30px_rgb(255,192,203,0.4)] text-pink-500 hover:scale-110 hover:bg-pink-50 transition-all cursor-pointer"
      aria-label={isMuted ? "Unmute music" : "Mute music"}
    >
      {isMuted ? <VolumeX size={26} /> : <Volume2 size={26} />}
    </button>
  );
}