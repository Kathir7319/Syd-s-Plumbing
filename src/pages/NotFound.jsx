import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Wrench, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/servicesData';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto shadow-sm">
          <Wrench className="w-10 h-10 animate-bounce" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            404 - Page Not Found
          </h1>
          <p className="text-slate-600 text-sm">
            It looks like this pipe has a dead end! The page you were looking for doesn&apos;t exist or has moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Syd: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
