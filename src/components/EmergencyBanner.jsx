import React from 'react';
import { Phone, AlertCircle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white border-b border-sky-900/60 py-2 px-4 relative z-50 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left Side: Emergency notice */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="font-semibold text-amber-400 uppercase tracking-wider text-[11px] sm:text-xs bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            Emergency Service
          </span>
          <span className="text-slate-300 hidden md:inline">
            Rapid plumbing dispatch across Morrisville, NC &amp; surrounding areas
          </span>
        </div>

        {/* Right Side: Direct Action Button */}
        <div className="flex items-center gap-4 text-xs font-medium ml-auto">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>Fast Local Arrival</span>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-sm hover:shadow-amber-500/20 hover:scale-[1.02]"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call Now: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
