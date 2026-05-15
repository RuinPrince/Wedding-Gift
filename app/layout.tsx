import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import GlobalMusicPlayer from '../components/GlobalMusicPlayer';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'], variable: '--font-lato' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} bg-[#FFF5F7] text-slate-800 font-sans overflow-x-hidden selection:bg-pink-300 selection:text-white pt-16`}>
        {/* The music player sits outside the children to stay persistent */}
        <GlobalMusicPlayer /> 
        <Navbar />
        {children}
      </body>
    </html>
  );
}