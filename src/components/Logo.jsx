import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'full', size = 'md', className = '', isLight = false }) {
  // Sizes
  const emblemSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const titleSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const subtitleSizeClasses = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm'
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg ${className}`}>
      {/* Dynamic SVG Emblem Badge */}
      <div className={`relative flex-shrink-0 ${emblemSizeClasses[size] || emblemSizeClasses.md} rounded-xl shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-sky-500 via-sky-600 to-navy-900 p-0.5 flex items-center justify-center`}>
        <svg
          viewBox="0 0 64 64"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle pipe pattern */}
          <circle cx="32" cy="32" r="24" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="3 3" opacity="0.35" />
          
          {/* Water droplet shape */}
          <path
            d="M32 10 C32 10, 18 28, 18 37 C18 44.7 24.3 51 32 51 C39.7 51 46 44.7 46 37 C46 28, 32 10, 32 10 Z"
            fill="url(#logoDropFill)"
          />
          
          {/* Stylized plumbing wrench */}
          <path
            d="M38 24 L27 35 M34 21 C36 19 39 19 41 21 C43 23 43 26 41 28 L37 32 L32 27 L35 23 Z"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="25" cy="37" r="2.5" fill="#ffffff" />
          
          {/* Water ripple curve */}
          <path
            d="M26 42 C28 45 31 46 34 46"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.85"
          />

          <defs>
            <linearGradient id="logoDropFill" x1="18" y1="10" x2="46" y2="51" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="0.5" stopColor="#0284c7" />
              <stop offset="1" stopColor="#0369a1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant !== 'icon' && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-black tracking-tight ${titleSizeClasses[size] || titleSizeClasses.md} ${isLight ? 'text-white' : 'text-slate-900 group-hover:text-sky-700'} transition-colors`}>
              SYD&apos;S
            </span>
            <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-sky-400' : 'bg-sky-600'}`}></span>
            <span className={`font-bold tracking-wider ${titleSizeClasses[size] || titleSizeClasses.md} text-sky-500`}>
              PLUMBING
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`inline-block px-1.5 py-0.2 rounded font-bold uppercase tracking-wider ${subtitleSizeClasses[size] || subtitleSizeClasses.md} ${
              isLight ? 'bg-sky-950/80 text-sky-300 border border-sky-800/50' : 'bg-sky-50 text-sky-700 border border-sky-200'
            }`}>
              Morrisville, NC
            </span>
            <span className={`hidden sm:inline font-medium ${subtitleSizeClasses[size] || subtitleSizeClasses.md} ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
              • Fast &amp; Trusted
            </span>
          </div>
        </div>
      )}
    </Link>
  );
}
