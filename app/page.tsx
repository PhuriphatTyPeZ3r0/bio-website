'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SpaceLoading from '@/components/SpaceLoading';
import { 
  MoreHorizontal 
} from 'lucide-react';
import { 
  FaDiscord,
  FaFacebook, 
  FaGithub, 
  FaInstagram, 
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa6';
import { Button } from '@/components/Button';
import { TouchCarousel } from '@/components/TouchCarousel';
import { VantaBackground } from '@/components/VantaBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const username = "PhuriphatTyPeZ3r0";
  
  const carouselItems = [
    {
      id: 1,
      title: 'Code Geass',
      subtitle: 'Lelouch Lamperouge',
      image: '/images/codegeass.jpg',
    },
    {
      id: 2,
      title: 'Eureka Seven',
      subtitle: 'Renton Thurston',
      image: '/images/eurekaseven.jpg',
    },
    {
      id: 3,
      title: 'Naruto',
      subtitle: 'Naruto Uzumaki',
      image: '/images/naruto.jpg',
    },
    {
      id: 4,
      title: 'Eureka Seven AO',
      subtitle: 'Ao Fukai',
      image: '/images/eurekasevenao.jpg',
    },
    {
      id: 5,
      title: 'Gundam 00',
      subtitle: 'Setsuna F. Seiei',
      image: '/images/gundam00.jpg',
    },
    {
      id: 6,
      title: 'Akame ga Kill!',
      subtitle: 'Akame',
      image: '/images/akamegakill.jpg',
    },
    {
      id: 7,
      title: 'Gundam AGE',
      subtitle: 'Kio Asuno',
      image: '/images/gundamage.jpg',
    },
    {
      id: 8,
      title: 'Gundam SEED',
      subtitle: 'Kira Yamato',
      image: '/images/gundamseed.jpg',
    },
    {
      id: 9,
      title: 'Mushoku Tensei',
      subtitle: 'Rudeus Greyrat',
      image: '/images/mushokutensei.jpg',
    },
    {
      id: 10,
      title: 'Attack on Titan',
      subtitle: 'Eren Yeager',
      image: '/images/attackontitan.jpg',
    },
    {
      id: 11,
      title: 'Demon Slayer',
      subtitle: 'Tanjiro Kamado',
      image: '/images/demonslayer.jpg',
    },
    {
      id: 12,
      title: 'Erased',
      subtitle: 'Satoru Fujinuma',
      image: '/images/erased.png',
    },
    {
      id: 13,
      title: 'SSSS Gridman',
      subtitle: 'Yuta Hibiki',
      image: '/images/ssssgridman.png',
    }
  ];



  
  const socialLinks = [
    {
      id: 1,
      title: 'Facebook',
      icon: <FaFacebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/phuriphat.hemakul',
    },
    {
      id: 2,
      title: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/arm.phx',
    },
    {
      id: 3,
      title: 'Discord',
      icon: <FaDiscord className="w-6 h-6" />,
      url: 'https://discord.com/users/619956172694224957',
    },
    {
      id: 4,
      title: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/PhuriphatTyPeZ3r0',
    },
    {
      id: 5,
      title: 'NGL ',
      icon: <FaEnvelope className="w-6 h-6" />,
      url: 'https://ngl.link/arm_phx',
    },
  ];

  if (isLoading) {
    return <SpaceLoading />;
  }

  return (
      <div className="min-h-screen bg-transparent flex justify-center items-start p-4 sm:p-8 relative overflow-hidden text-white font-prompt">
        
        {/* Vanta.js 3D Background */}
        <VantaBackground />

        {/* Main Container (Mecha HUD Style) */}
        <div className="w-full max-w-sm relative z-10 pt-8 pb-12">

      {/* Header / Profile Section */}
      <div className="flex flex-col items-center mb-10 fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-age-cyan blur-2xl opacity-20 animate-pulse"></div>
          <img 
            src={`https://unavatar.io/github/${username}`} 
            alt="Profile Avatar" 
            className="w-28 h-28 object-cover rounded-2xl shadow-2xl relative z-10 border-2 border-age-cyan/30"
          />
          {/* Decorative Corners */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-age-cyan z-20"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-age-cyan z-20"></div>
        </div>
            
        <h1 className="text-2xl font-black tracking-tighter mb-2 text-white font-orbitron uppercase italic">
          Phuriphat Hemakul
        </h1>
        <div className="h-1 w-12 bg-age-cyan mb-4"></div>
        <div className="bg-slate-900/50 backdrop-blur-md px-4 py-3 rounded-lg border border-age-cyan/40 w-full max-w-xs mx-auto shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <p className="text-[10px] sm:text-xs text-white tracking-widest font-orbitron uppercase font-bold text-center drop-shadow-lg">
            "Don't beg for things, do it yourself. <br className="hidden sm:block" /> Or else you won't get anything."
          </p>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-center font-orbitron font-bold text-[12px] tracking-widest mb-6 text-slate-400 uppercase fade-in-up" style={{ animationDelay: '0.2s' }}>
        — Contact —
      </h2>

      {/* Links Section */}
      <div className="flex flex-col gap-4 mb-8 w-full">
        {socialLinks.map((link, index) => (
          <a 
            key={link.id}
            href={link.url}
            className="group w-full bg-slate-900/40 backdrop-blur-md rounded-lg py-4 px-6 flex items-center justify-between border border-white/5 hover:border-age-cyan/50 hover:bg-age-cyan/5 transition-all duration-300 fade-in-up"
            style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
          >
            {/* Left Icon (Clear Green / Ultramarine tone) */}
            <div className="text-age-cyan group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">
              {link.icon}
            </div>
            
            {/* Center Text */}
            <span className="font-orbitron font-bold text-slate-200 text-[13px] tracking-wider group-hover:text-age-cyan transition-colors">
              {link.title}
            </span>
            
            {/* Right Icon */}
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-age-cyan transition-colors group-hover:animate-pulse"></div>
          </a>
        ))}
      </div>

      {/* Touch Carousel Section */}
      <div className="w-full fade-in-up" style={{ animationDelay: '0.6s' }}>
        <TouchCarousel items={carouselItems} />
      </div>

    </div>
  </div>
  );
}